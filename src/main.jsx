import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Second from './Second'
import Portfolio from './Portfolio'
import Contact from './Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Second/>
    <Portfolio/>
    <Contact/>
  </StrictMode>
)
