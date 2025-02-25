import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';

//import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement:<h1> ErrorPage </h1>,
  },
  {
    path: '/about',
    element: <h1>about</h1>
  },
]);


export default router