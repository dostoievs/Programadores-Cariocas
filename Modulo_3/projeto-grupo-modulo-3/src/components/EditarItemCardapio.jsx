import { useState } from "react"
import axios from "axios"
import FormItem from "./FormItem"
function EditarItemCardapio() {
    const [tituloPut, setTituloPut] = useState("Nenhum Titulo Digitado")
    const [idPut, setIdPut] = useState(0)
    const itens = {
        id: "",
        categoria: "",
        nome: "",
        preco: "",
        estoque: "",
    }
    function AlterarNota() {
        axios
            .put(`https://modulo-3-projeto-grupo.onrender.com/itens/${idPut}`, itens)
            .then((response) => { console.log(response) })
            .catch((error) => { console.log(error) })
    }
    return (
        <div>
            <h3>Alterar Tarefa</h3>
            <FormItem/>
            <label>id: </label>
            <input type="number" id="idPut" onChange={() => (
                setIdPut(document.getElementById('idPut').value)
            )} />
            <label>Titulo: </label>
            <input type="text" id="tituloPut" onChange={() => (
                setTituloPut(document.getElementById('tituloPut').value)
            )} />
            <button onClick={() => AlterarNota()}>Alterar</button>
        </div>
    )
}
export default EditarItemCardapio