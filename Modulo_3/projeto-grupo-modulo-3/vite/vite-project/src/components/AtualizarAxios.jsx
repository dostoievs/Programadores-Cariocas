import { useState } from "react"
import axios from "axios"
import GetAxios from "./GetAxios"
function AtualizarAxios() {
    const [tituloTarefa, setTituloTarefa] = useState("Nenhum Titulo Digitado")
    const [id, setId] = useState(0);
    const dado = {
        id: id,
        titulo: tituloTarefa,
        status: true,
    }
    function AtualizarNota() {
        axios
            .put(`https://fork-servidor-notas.onrender.com/notas/${id}`, dado)
            .then((response) => { console.log(response) })
            .catch((error) => { console.log(error) })
    }
    return (
        <div>
            <label>Id: </label>
            <input type="number" id="idMantendo" onChange={() => (
                setId(document.getElementById('idMantendo').value)
            )} />

            <label>Titulo: </label>
            <input type="text" id="tituloNovo" onChange={() => (
                setTituloTarefa(document.getElementById('tituloNovo').value)
            )} />
            <button onClick={() => AtualizarNota()}>Atualizar</button>
        </div>
    )
}
export default AtualizarAxios