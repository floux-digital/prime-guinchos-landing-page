
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function render(url: string) {
  const queryClient = new QueryClient();

  const appHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );

  return { html: appHtml, preloadLinks: '' };
}
