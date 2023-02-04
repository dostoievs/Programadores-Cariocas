import { useState } from "react"
import axios from "axios"
import GetAxios from "./GetAxios"
function NovaTarefa() {
    const [tituloTarefa, setTituloTarefa] = useState("Nenhum Titulo Digitado")
    const dado = {
        id: "",
        titulo: tituloTarefa,
        status: true,
      }
    function PostarNota() {
        axios
          .post('https://fork-servidor-notas.onrender.com/notas', dado)
          .then((response) => { console.log(response) })
          .catch((error) => { console.log(error) })
      }
    return (
        <div>
            <label>Titulo: </label>
            <input type="text" id="titulo" onChange={()=>(
                setTituloTarefa(document.getElementById('titulo').value)
    )}/>
            <button onClick={()=>PostarNota()}>Cadastrar</button>
        </div>
    )
}
export default NovaTarefa