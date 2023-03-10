import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import App from './src/App'
import AdicionarItem from './src/components/AdicionarItem';
import FormItem from './src/components/FormItem';
import Contato from './src/components/Contato';
import ExibirCardapio from './src/components/ExibirCardapio';
import Sobre from './src/components/Sobre';
import ExibirPedidos from './src/components/ExibirPedidos';
import EditarItemCardapio from './src/components/EditarItemCardapio'
import DeletarItemCardapio from './src/components/DeletarItemCardapio';
import Pedido from './src/components/Pedido';
import Autores from './src/components/Autores';
import Login from './src/components/Login';




const router = createHashRouter(
  [{
    path: "/",
    element: <App/>,
    errorElement: <h1> Error 404 </h1>,
    children: [{
      path: "/",
      element: <h1> Home </h1>,
    },
    {
      path: "/cardapio",
      element: <div>
        <h1> Cardápio </h1>
        <ExibirCardapio/>
      </div>,
    },
    {
      path: "/cardapio/adicionar-item",
      element: <div>
        <h1>Adicionar Item</h1>
        <AdicionarItem/>
        </div>,
     },
     {
       path: "/cardapio/editar-item/:id",
       element: <div>
       <h1>Editar Item </h1>
       <EditarItemCardapio/>
       </div>,
     },
     {
       path: "/cardapio/deletar-item/:id",
       element: <div>
       <DeletarItemCardapio/>
       </div>,
     },
     {
       path: "/sobre",
       element: <Sobre />,
     },
     {
       path: "/pedido/:id",
       element: <Pedido/>,
     },
     {
       path: "/contato",
       element: <Contato />,
     },
    {
       path: "/autores",
       element: <Autores />,
     },
     {
      path: "/login",
      element: <Login/>,
    },
    ]
  }],
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
