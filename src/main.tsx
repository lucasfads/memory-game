import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <footer>
      <div className="container">
        Developed with React by <a href="https://lucasfads.com/">Lucas Fads</a>.
      </div>
    </footer>
  </StrictMode>,
)
