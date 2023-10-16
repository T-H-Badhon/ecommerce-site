import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/Header/Header';
import Orders from './components/Orders/Orders';
import Body from './components/Body/Body';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/Route/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='container mx-auto'><Header></Header>
      <Outlet></Outlet></div>,
    children: [
      {
        path: '/',
        element: <Body></Body>,
        loader: () => fetch('products.json')
      },
      {
        path: 'orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>,
        loader: () => fetch('products.json')
      },
      {
        path: 'inventory',
        element: <h1>inventory loading...</h1>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'checkout',
        element: <h1 className='text-center text-3xl'>checking out.....</h1>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
