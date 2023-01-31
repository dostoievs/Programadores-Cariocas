import axios from "axios"
function GetAxios() {
    axios
        .get('https://projeto-individual-modulo-3-react-js.onrender.com/itens')
        .then((response) => { console.log(response.data) })
        .catch((error) => { console.log(error) })

    return (
        <div>GetAxios</div>
    )
}
/*  var axios = require("axios").default;

  var options = {
      method: 'GET',
      url: 'https://projeto-individual-modulo-3-react-js.onrender.com/itens'
  };

  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });
}*/
export default GetAxios