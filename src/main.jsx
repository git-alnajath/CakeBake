import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Project_main from './Project-main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Project_main />
  </StrictMode>,
)
