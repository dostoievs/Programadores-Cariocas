import { useState } from "react"
import Button from 'react-bootstrap/Button'
function FormItem() {
            const [nome, setNome] = useState("");
            const [categoria, setCategoria] = useState("Comida");
            const [preco, setPreco] = useState(0);
            const [estoque, setEstoque] = useState(0);
            const [descricao, setDescricao] = useState("");
            const [status, setStatus] = useState("Ativo");
            const [foto, setFoto] = useState("");
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Produto:</label>
                    <input type="text" className="form-control" id="nome" placeholder="Nome do Produto" required onChange={()=>{
                            setNome(document.getElementById('nome').value)
                    }}/>

                </div>
                <label htmlFor='categoria'>Categoria:</label>
                <select className="form-control" id="categoria" name="categoria">
                    <option>Comidas</option>
                    <option>Bebidas</option>
                    <option>Acompanhamentos</option>
                    <option>Sobremesa</option>
                </select>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Preço:</label>
                    <input type="number" className="form-control" id="preco" placeholder="Digite o Preço" required onChange={()=>{
                            setPreco(document.getElementById('preco').value)
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Quantidade:</label>
                    <input type="number" className="form-control" id="estoque" placeholder="Digite o Estoque" required onChange={()=>{
                            setEstoque(document.getElementById('estoque').value)
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Foto:</label>
                        <input type="text" className="form-control" id="foto" placeholder="Digite o Estoque" required onChange={()=>{
                                setFoto(document.getElementById('foto').value)
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationTextarea">Descrição:</label>
                        <textarea className="form-control" id="descricao" placeholder="Digite sua Mensagem" required onChange={()=>{
                                setDescricao(document.getElementById('descricao').value)
                        }}></textarea>
                    </div>
                    <label htmlFor='status'>Status:</label>
                    <select className="form-control" id="status" name="status">
                        <option>Ativo</option>
                        <option>Inativo</option>
                    </select>
            </form>
        </>
    )
}
export default FormItem