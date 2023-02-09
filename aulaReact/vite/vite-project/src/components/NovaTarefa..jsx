import { useState } from "react"
import Button from "./Button";
function NovaTarefa() {
    const [titulo, setTitulo] = useState('Nenhum Título Digitado');
    return (
        <>
        <br/><br/>
            <label htmlFor="titulo">Título:</label>
            <input type="text" name="titulo" id="titulo" onChange={ ()=>{
                setTitulo(document.getElementById("titulo").value)
            }} />
            <h4>{titulo}</h4>
        </>
    )
}
export default NovaTarefa