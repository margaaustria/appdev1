import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootComponent from './components/ComponentA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>,
)
