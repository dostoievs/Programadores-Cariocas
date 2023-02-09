import { useState } from "react"
import axios from "axios"
import GetAxios from "./GetAxios"
function DeleteAxios() {
    const [tituloTarefa, setTituloTarefa] = useState("Nenhum Titulo Digitado")
    const [id, setId]=useState(0)
    function DeletarNota() {
        axios
          .delete(`https://fork-servidor-notas.onrender.com/notas/${id}`)
          .then((response) => { console.log(response) })
          .catch((error) => { console.log(error) })
      }
    return (
        <div>
            <label>Id: </label>
            <input type="number" id="id" onChange={()=>(
                setId(document.getElementById('id').value)
    )}/>
            <button onClick={()=>DeletarNota()}>Deletar</button>
        </div>
    )
}
export default DeleteAxios