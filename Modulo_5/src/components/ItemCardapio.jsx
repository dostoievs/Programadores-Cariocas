import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Globais from './Globais';
function ItemCardapio({element}, {key}) {
  Globais.itens[0].nome+=element.nome
  Globais.itens[0].categoria+=element.categoria
  Globais.itens[0].preco+=element.preco
  Globais.itens[0].estoque+=element.estoque
  Globais.itens[0].descricao+=element.descricao
  Globais.itens[0].status+=element.status
  Globais.itens[0].foto+=element.foto
  return (
      <>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={element.fotos} width='100px' height='250px'/>
          <Card.Body>
            <Card.Title>{element.nome}</Card.Title>
            <Card.Text>
              R${element.preco.toFixed(2)}
            </Card.Text>
            <input type="number" min="0" max={element.estoque}/>
            <div>
              <Link to='/pedido'>Adicionar ao Carrinho</Link>
              <Link to={`/cardapio/editar-item/${element.id}`}>Editar</Link>
              <Link to={`/cardapio/deletar-item/${element.id}`}>Deletar</Link>
            </div>
          </Card.Body>
        </Card>
      </>
  )
}
export default ItemCardapio
