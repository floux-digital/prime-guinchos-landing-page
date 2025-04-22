
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const queryClient = new QueryClient()

// Use hydration only if the app was server-rendered
const container = document.getElementById("root")!
const hasChildNodes = container && container.innerHTML && container.innerHTML.trim() !== ''

if (hasChildNodes) {
  console.log('Hydrating existing server-rendered content')
  hydrateRoot(
    container,
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
} else {
  console.log('No server-rendered content found, creating new root')
  createRoot(container).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
