import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import AdicionarItem from './components/AdicionarItem';
import FormItem from './components/FormItem';
import Contato from './components/Contato';
import ExibirCardapio from './components/ExibirCardapio';
import Sobre from './components/Sobre';
import ExibirPedidos from './components/ExibirPedidos';
import EditarItemCardapio from './components/EditarItemCardapio'
import DeletarItemCardapio from './components/DeletarItemCardapio';
import Pedido from './components/Pedido';


const router = createHashRouter(
  [{
    path: "/#",
    element: <App/>,
    errorElement: <h1> Error 404 </h1>,
    children: [{
      path: "/#",
      element: <h1> Home </h1>,
    },
    {
      path: "/cardapio",
      element: <div>
        <h1> Cardápio </h1>
        <ExibirCardapio/>
      </div>,
      children: [
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
      ],
    },
    {
      path: "/sobre",
      element: <Sobre />,
    },
    {
      path: "/pedido",
      element: <Pedido/>,
    },
    {
      path: "/contato",
      element: <Contato />,
    },
    ]
  }],
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
