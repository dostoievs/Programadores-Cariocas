import Tabela from "../components/carrinho/Tabela";
import { useParams } from 'react-router-dom';

function Carrinho() {
  const {id} = useParams();
  return (
    <div>
      <Tabela id ={id}/>
    </div>
  );
}
export default Carrinho;