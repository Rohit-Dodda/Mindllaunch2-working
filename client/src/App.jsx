import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';

import Home from '@/pages/Home'
import Signup from '@/pages/Signup'
import Login from '@/pages/Login'
import PageNotFound from '@/small/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <Signup></Signup>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
])

const App = () => {
  useEffect(() => {
    const reloadInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const expirationTime = new Date("2023-03-26T00:00:00").getTime();
      
      if (currentTime > expirationTime) {
        clearInterval(reloadInterval);
      } else {
        window.location.reload();
      }
    }, 24 * 60 * 60 * 1000); 

    return () => {
      clearInterval(reloadInterval);
    };
  }, []);
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App