import Card from 'react-bootstrap/Card';
import AstroNos from "../../assets/AstroNos.png"
import Nos2 from "../../assets/Nos2.png"
import './Fundo.css'



function Fundo() {
  return (
    <div>
<Card className="text-dark">
      <Card.Img className='imagem' src={Nos2} alt="Card image" class="rounded-0"/>
      <Card.ImgOverlay>
      <div className='titulo'>
        <br />
      </div>
      <div className='colunas'>
        <div className='tabelaF'>
          <h5>
            <img src={AstroNos} alt="astronauta" />
          </h5>
        </div>
        <div className='tabelaF'>
          <h5 className='text'>
            Criado para inovar no mercado <br/>de hamburgueria, o SpaceBurguer iniciou
            sua operação com uma loja <br/>em janeiro de 2022.<br /><br/>
            Pensamos nos ingredientes <br/>que você mais gosta e montamos <br/>cada receita com
            o objetivo de <strong><br/>agradar toda a galáxia.</strong><br/><br/>
            <strong>Somos a primeira hamburgueria temática de outro mundo localizada
              no Rio de Janeiro.
            </strong>
          </h5>
        </div>
      </div>
      </Card.ImgOverlay>
    </Card>
      


    </div>
  );
}

export default Fundo;
