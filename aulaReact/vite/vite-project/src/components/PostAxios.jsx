import axios from "axios";
function PostAxios() {
  function PostarNota() {
    axios
      .post('https://fork-servidor-notas.onrender.com/notas', dado)
      .then((response) => { console.log(response) })
      .catch((error) => { console.log(error) })
  }
  return (
    <button onClick={()=>PostarNota()}>Postar</button>
  )
}
export default PostAxios