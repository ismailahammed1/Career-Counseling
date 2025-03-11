import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ServicesProvider } from './Contex/ServicesContext'

import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServicesProvider>
    
    <App/>
    
    </ServicesProvider>
  </StrictMode>,
);
