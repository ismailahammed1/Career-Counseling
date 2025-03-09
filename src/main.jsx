import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router'
import { ServicesProvider } from './Contex/ServicesContext' // ✅ Ensure correct path

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServicesProvider>  {/* ✅ Wrap RouterProvider inside ServicesProvider */}
      <RouterProvider router={router} />
    </ServicesProvider>
  </StrictMode>,
);
