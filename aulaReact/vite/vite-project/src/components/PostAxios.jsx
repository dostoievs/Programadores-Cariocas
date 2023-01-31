import axios from "axios"
function PostAxios() {
    const dado={
        categoria: "",
        nome: "",
        preco: 0,
        estoque: 0,
    }
    axios
    .post('https://projeto-individual-modulo-3-react-js.onrender.com/itens', dado)
    .then((response)=>{console.log(response)})
    .catch((error)=>{console.log(error)})
    return(
        <button onClick={()=>PostarNota()}>Postar</button>
    )
}
export default PostAxios