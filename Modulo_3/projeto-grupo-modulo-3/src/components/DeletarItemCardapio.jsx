import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
import ExibirCardapio from "./ExibirCardapio";
function DeletarItemCardapio() {
    /*const [idDelete, setIdDelete] = useState(0)
    
    function DeletarNota() {*/
    const { id } = useParams();
        axios
          .delete(`https://modulo-3-projeto-grupo.onrender.com/itens/${id}`)
          .then((response) => { console.log(response) })
          .catch((error) => { console.log(error) })
      /*}*/
    return (<>
        this.props.history.push('/')./your-path
        </>
    )
}
export default DeletarItemCardapio
{/*<div>
            <h3>Deletar Tarefa</h3>
            setIdDelete(id)
            <button onClick={()=>DeletarNota()}>Deletar</button>
        </div>*/}