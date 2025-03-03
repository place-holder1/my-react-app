import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MoveProvider } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoveProvider>
    <App />
    </MoveProvider>
  </StrictMode>,
)
