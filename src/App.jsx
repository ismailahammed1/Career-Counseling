import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router';
import './index.css';
import { ServicesProvider } from './Contex/ServicesContext';
import AuthProvider from './Contex/AuthProvider';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StrictMode>
      <ServicesProvider>
    <AuthProvider>

        <RouterProvider router={router} />
  
    </AuthProvider>
      </ServicesProvider>
    </StrictMode>
  );
}

export default App;