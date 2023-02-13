import { useState } from "react"
import axios from "axios"
import FormItem from "./FormItem"
import { useParams } from "react-router-dom";
function EditarItemCardapio() {
    const [cardapio, setCardapio] = useState([])
    const [ref, setRef]=useState(0)
    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("Comidas");
    const [preco, setPreco] = useState(0);
    const [estoque, setEstoque] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("Ativo");
    const [foto, setFoto] = useState("");
    const itens = {
       id: id,
       categoria: categoria,
       nome: nome,
       preco:  Number.parseFloat(preco),
       estoque: estoque,
       fotos: foto,
       descricao: descricao,
       status: status
    }
    function EditarItem() {  
            axios  
            .put(`https://modulo-3-projeto-grupo.onrender.com/itens/${id}`, itens)
            .then((response) => { console.log(response) 
                setCardapio(response.data) })
            .catch((error) => { console.log(error) })
    }
    console.log(`${cardapio}`)
    return (
        <div>
            <h3>Alterar Tarefa</h3>
            <form>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Produto:</label>
                <input type="text" className="form-control" id="nome"  placeholder="Nome do Produto" required onChange={() => {
                  setNome(document.getElementById('nome').value)
                }} />
              </div>
              <label htmlFor='categoria'>Categoria:</label>
              <select className="form-control" id="categoria" name="categoria" defaultValue={''} onChange={()=>{setCategoria(document.getElementById('categoria').options[document.getElementById('categoria').selectedIndex].value);}} required>
                <option value="" disabled>Selecione uma Categoria ...</option>
                <option value='Comidas'>Comidas</option>
                <option value='Bebidas'>Bebidas</option>
                <option value='Acompanhamentos' onChange={()=>{setCategoria(document.getElementById('categoria').value)}}>Acompanhamentos</option>
                <option value='Sobremesa' onChange={()=>{setCategoria(document.getElementById('categoria').value)}}>Sobremesa</option>
              </select>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Preço:</label>
                <input type="number" className="form-control" id="preco" placeholder="Digite o Preço" min='0' required onChange={() => {
                  setPreco(document.getElementById('preco').value)
                }} />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Quantidade:</label>
                <input type="number" className="form-control" id="estoque" min='0' placeholder="Digite o Estoque" required onChange={() => {
                  setEstoque(parseInt(document.getElementById('estoque').value))
                }} />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Foto:</label>
                <input type="text" className="form-control" id="foto" placeholder="Digitea URL da foto" required onChange={() => {
                  setFoto(document.getElementById('foto').value)
                }} />
              </div>
              <div className="mb-3">
                <label htmlFor="validationTextarea">Descrição:</label>
                <textarea className="form-control" id="descricao" placeholder="Digite a descrição do produto" required onChange={() => {
                  setDescricao(document.getElementById('descricao').value)
                }}></textarea>
              </div>
              <label htmlFor='status'>Status:</label>
              <select className="form-control" id="status" name="status" defaultValue={''} onChange={()=>{setStatus(document.getElementById('status').options[document.getElementById('status').selectedIndex].value);}} required>
                <option value='' disabled>Selecione um Status ...</option>
                <option value='Ativo' >Ativo</option>
                <option value='Inativo'>Inativo</option>
              </select>
            </form>
            <button onClick={() => ((itens.status!='')&&
                                    (itens.nome!='')&&
                                    (itens.categoria!='')&&
                                    (itens.foto!='')&&
                                    (itens.estoque!='')&&
                                    (itens.preco!='')&&
                                    (itens.descricao!=''))?EditarItem():''}>Alterar</button>
        </div>
    )
}
export default EditarItemCardapio