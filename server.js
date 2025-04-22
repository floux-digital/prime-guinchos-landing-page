
import fs from 'node:fs/promises'
import express from 'express'
import { createServer as createViteServer } from 'vite'
import compression from 'compression'
import serveStatic from 'serve-static'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()
  
  // Compress responses
  app.use(compression())

  let vite
  if (process.env.NODE_ENV !== 'production') {
    // Create Vite server in middleware mode and configure the app type as
    // 'custom', disabling Vite's own HTML serving logic so parent server
    // can take control
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    })

    // Use vite's connect instance as middleware
    app.use(vite.middlewares)
  } else {
    // Serve static assets in production
    app.use(serveStatic(resolve(__dirname, 'dist/client'), {
      index: false
    }))
  }

  // Handle all routes with SSR
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template, render
      
      if (process.env.NODE_ENV !== 'production') {
        // Always read fresh template in dev
        template = await fs.readFile(resolve(__dirname, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
      } else {
        template = await fs.readFile(
          resolve(__dirname, 'dist/client/index.html'),
          'utf-8'
        )
        render = (await import('./dist/server/entry-server.js')).render
      }

      const { html: appHtml, preloadLinks } = await render(url)
      
      const html = template
        .replace(`<!--app-html-->`, appHtml)
        .replace(`<!--preload-links-->`, preloadLinks)
      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') {
        vite.ssrFixStacktrace(e)
      }
      console.log('SSR Error:', e.stack)
      next(e)
    }
  })

  const port = process.env.PORT || 8080 // Alterado para combinar com o porto do Vite
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

createServer().catch(err => {
  console.error('Error starting server:', err)
})
