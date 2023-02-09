import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'

const router = createBrowserRouter([{
  path: "/",
  element: <App/> ,
  errorElement: <h1> Error 404 </h1>,
  children: [{
      path: "/",
      element: <h1> Home </h1>,
    },
    {
      path: "/sobre",
      element: <h1> Sobre </h1>,
    },
    {
      path: "/tarefas",
      element: <h1> Página de Tarefas </h1>,
    },
    {
      path: "/contato",
      element: <h1> Página de Contato </h1>,
    },
  ]
}, ]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router = {router}/> 
  </React.StrictMode>,
)