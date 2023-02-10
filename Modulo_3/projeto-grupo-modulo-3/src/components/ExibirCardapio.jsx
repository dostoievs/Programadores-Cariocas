import axios from "axios";
import { useEffect, useState } from "react";
import AdicionarItem from "./AdicionarItem";
import ItemCardapio from "./ItemCardapio";
import { Link, Outlet } from 'react-router-dom'
function ExibirCardapio() {
  const [cardapio, setCardapio] = useState([])
  const [ref, setRef]=useState(0)
  useEffect(() => {
    axios
      .get('https://modulo-3-projeto-grupo.onrender.com/itens')
      .then((response) => {
        console.log(response.data[0].nome)
        setCardapio(response.data)
      })
      .catch((error) => { console.error(error) })
  }, [ref])
  return (
    <div>
      {<button onClick={()=>setRef(ref+1)}>Atualizar</button>}
      {<Link to="/cardapio/adicionar-item">Adicionar Produtos ao Cardápio</Link>}
      {<Outlet/>}
      {cardapio.map((element) => (
      <ItemCardapio element={element} key={element.id}/>
      ))}
    </div>
  )
}
export default ExibirCardapio