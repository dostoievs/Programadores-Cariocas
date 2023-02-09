import axios from "axios";
import FormItem from './FormItem'
function AdicionarItem() {
  const itens = {
    id: "",
    categoria: "",
    nome: "",
    preco: "",
    estoque: "",
  }
  function PostarItem() {
    axios
      .post('https://modulo-3-projeto-grupo.onrender.com/itens', itens)
      .then((response) => { console.log(response) })
      .catch((error) => { console.log(error) })
  }
  return (
    <>
      <FormItem/>
      <button onClick={() => PostarItem()}>Postar</button>
    </>
  )
}
export default AdicionarItem