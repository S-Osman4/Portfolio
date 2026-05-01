import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ErrorBoundary } from './components/ErrorBoundary'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error(
    'Root element not found. Make sure your index.html contains <div id="root"></div>.'
  )
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong. Please refresh the page.</p>}>
      <App />
    </ErrorBoundary>
  </StrictMode>
)