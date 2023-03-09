import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
function ItemCardapio({element}) {
  return (
    <>
    {console.log(element)}
    {element.categoria=='Comida'?
      <Card style={{ width: '18rem' }}>
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
      : ''}
      {element.categoria=='Sobremesa'?
      <Card style={{ width: '18rem' }}>
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
      : ''}
    </>
  )
}
export default ItemCardapio
