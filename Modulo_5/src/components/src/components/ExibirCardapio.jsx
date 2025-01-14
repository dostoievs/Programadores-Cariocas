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
        setCardapio(response.data)
      })
      .catch((error) => { console.error(error) })
  }, [ref])
  return (
    <div>
      {<button onClick={()=>setRef(ref+1)}>Atualizar</button>}
      {<Link to="/cardapio/adicionar-item">Adicionar Produtos ao Cardápio</Link>}
      <Outlet/><br></br>
      
        {cardapio.map((element) => (
            element.status=="Ativo"?<ItemCardapio element={element} key={element.id}/>:''
        ))}
      </div>
  )
}
export default ExibirCardapio