import axios from "axios";
function PostAxios() {
  const dado = {
    id: "",
    titulo: "Estudando Post Axios",
    status: true,
  }
  function PostarNota() {
    axios
      .post('https://fork-servidor-notas.onrender.com', dado)
      .then((response) => { console.log(response) })
      .catch((error) => { console.log(error) })
  }
  return (
    <button onClick={()=>PostarNota()}>Postar</button>
  )
}
export default PostAxios