import axios from "axios";
import { useState } from "react";
import FormItem from './FormItem'
function AdicionarItem() {
   const [nome, setNome] = useState("");
   const [categoria, setCategoria] = useState("");
   const [preco, setPreco] = useState(0);
   const [estoque, setEstoque] = useState(0);
   const [descricao, setDescricao] = useState("");
   const [status, setStatus] = useState("");
   const [foto, setFoto] = useState("");
   const itens = {
      id: "",
      categoria: categoria,
      nome: nome,
      preco:  Number.parseFloat(preco),
      estoque: estoque,
      fotos: foto,
      descricao: descricao,
      status: status
   }
  function PostarItem() {
    axios
      .post('https://modulo-3-projeto-grupo.onrender.com/itens', itens)
      .then((response) => { console.log(response) })
      .catch((error) => { console.log(error) })
  }
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Produto:</label>
          <input type="text" className="form-control" id="nome" placeholder="Nome do Produto" required onChange={() => {
            setNome(document.getElementById('nome').value)
          }} />

        </div>
        <label htmlFor='categoria'>Categoria:</label>
        <select className="form-control" id="categoria" name="categoria" onChange={()=>{setCategoria(document.getElementById('categoria').options[document.getElementById('categoria').selectedIndex].value);}} required>
          <option value='Comidas'>Comidas</option>
          <option value='Bebidas'>Bebidas</option>
          <option value='Acompanhamentos' onChange={()=>{setCategoria(document.getElementById('categoria').value)}}>Acompanhamentos</option>
          <option value='Sobremesa' onChange={()=>{setCategoria(document.getElementById('categoria').value)}}>Sobremesa</option>
        </select>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Preço:</label>
          <input type="number" className="form-control" id="preco" placeholder="Digite o Preço" required onChange={() => {
            setPreco(document.getElementById('preco').value)
          }} />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Quantidade:</label>
          <input type="number" className="form-control" id="estoque" placeholder="Digite o Estoque" required onChange={() => {
            setEstoque(parseInt(document.getElementById('estoque').value))
          }} />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Foto:</label>
          <input type="text" className="form-control" id="foto" placeholder="Digite o Estoque" required onChange={() => {
            setFoto(document.getElementById('foto').value)
          }} />
        </div>
        <div className="mb-3">
          <label htmlFor="validationTextarea">Descrição:</label>
          <textarea className="form-control" id="descricao" placeholder="Digite sua Mensagem" required onChange={() => {
            setDescricao(document.getElementById('descricao').value)
          }}></textarea>
        </div>
        <label htmlFor='status'>Status:</label>
        <select className="form-control" id="status" name="status" onChange={()=>{setStatus(document.getElementById('status').options[document.getElementById('status').selectedIndex].value);}} required>
          <option value='Ativo'>Ativo</option>
          <option value='Inativo'>Inativo</option>
        </select>
      </form>
      <button onClick={() => PostarItem()}>Postar</button>
    </>
  )
}
export default AdicionarItem