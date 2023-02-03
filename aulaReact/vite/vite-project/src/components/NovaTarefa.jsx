import { useState } from "react"
import axios from "axios";

function NovaTarefa() {
    const [titulo, setTitulo] = useState('Nenhum Titulo Digitado')
    const dado = {
        id: "",
        titulo: titulo,
        status: true,
      }
    function PostarNota() {
        axios
          .post('https://fork-servidor-notas.onrender.com/notas', dado)
          .then((response) => { console.log(response) })
          .catch((error) => { console.log(error) })
      }
    return (
        <>
            <label htmlFor="titulo">Titulo: </label>
            <input type="text" id="titulo" onChange={()=>{
                setTitulo(document.getElementById('titulo').value)
            }} />
            <button onClick={()=>{PostarNota()

            }}>Post</button>
        </>
    )
}
export default NovaTarefa