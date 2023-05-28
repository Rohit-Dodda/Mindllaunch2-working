import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PageNotFound from './small/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  }
])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
