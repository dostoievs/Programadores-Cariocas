import { useState } from "react"
import axios from "axios"
function DeletarItemCardapio() {
    const [idDelete, setIdDelete] = useState(0)
    function DeletarNota() {
        axios
          .delete(`https://modulo-3-projeto-grupo.onrender.com/itens/${idDelete}`)
          .then((response) => { console.log(response) })
          .catch((error) => { console.log(error) })
      }
    return (
        <div>
            <h3>Deletar Tarefa</h3>
            <label>id: </label>
            <input type="number" id="idDelete" onChange={()=>(
                setIdDelete(document.getElementById('idDelete').value)
    )}/>
            <button onClick={()=>DeletarNota()}>Deletar</button>
        </div>
    )
}
export default DeletarItemCardapio