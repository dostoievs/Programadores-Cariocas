import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ItemCardapio({element}) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={element.fotos} />
        <Card.Body>
          <Card.Title>{element.nome}</Card.Title>
          <Card.Text>
            R${element.preco.toFixed(2)}
          </Card.Text>
          <input type="number" min="0" max={element.estoque}/>
          {<Button variant="primary">Comprar</Button>}
        </Card.Body>
      </Card>

      {/*<div style={{align:'left', display:'flex', margin:20, alignItems:'center'}}>
      <label htmlFor={tituloTarefa}>{idTarefa} :</label>
      <input type="checkbox" id={tituloTarefa} />
      <span style={{marginLeft:20}}> {tituloTarefa}</span>
  </div>*/}
    </>
  )
}
export default ItemCardapio