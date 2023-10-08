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

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='container mx-auto'><Header></Header>
    <Outlet></Outlet></div>,
    children:[
      {
        path: '/',
        element: <Body></Body>,
        loader: ()=> fetch('products.json')
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: ()=> fetch('products.json')
      },
      {
        path:'inventory',
        element: <h1>inventory loading...</h1>
      },
      {
        path:'login',
        element: <h1>login adding...</h1>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
