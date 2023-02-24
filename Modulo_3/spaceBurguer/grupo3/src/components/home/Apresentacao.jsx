import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AstroHome from './../../assets/AstroHome.png'
import Alien3 from './../../assets/alien3.png'
import './Apresentacao.css'
import Xbacon from "./../../assets/Xbacon.png"
import Xburguer from "./../../assets/Xburguer.png"
import Vegetariano from "./../../assets/Vegetariano.png"
import Topo3 from "./../../assets/Topo3.png"
import Carousel from 'react-bootstrap/Carousel';

function Apresentacao() {
  return (
    <div>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Topo3}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='centroHome'>
                <div className='textoHome'>
                  <h3 className='text-home'>
                  Experimente nossos burgueres que são de <strong><br/>outro mundo!</strong><br />
                    <strong><br />
                      <Button className='button' variant="info" href='/#/pedido'><strong>ESCOLHA O SEU</strong></Button>
                    </strong>
                  </h3>
                </div>
                <img src={AstroHome} type='image/png' alt="astronauta" className='astroHome' />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Topo3}
              alt="First slide"
              type='image/png'
            />
            <Carousel.Caption>
              <div className='centroHome'>
                <div className='textoHome'>
                  <h3 className='text-home'>
                  Esqueça os sabores <br/>do planeta terra.<br/>
                  Conheça nosso cardápio <br/>e faça <strong>uma viagem espacial.</strong><br />
                    <strong>
                      <br />
                      <Button className='button' variant="info" href='/#/pedido'><strong>VIAJAR AGORA</strong></Button>
                    </strong>
                  </h3>
                </div>
                <img src={Alien3} type='image/png' alt="astronauta" className='astroHome2' />
              </div> 
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='infoHome'>
        <h2 className='h1Home'>Conheça nossos produtos:</h2>
        <div className='centroHome'>
          <div className='colunasHome'>
            <Card style={{ width: '15rem', height: '20.5rem' }} className='rosa'>
              <Card.Img variant="top" src={Xbacon} type='image/png' className='fotosHome' />
              <Card.Body>
                <Card.Title className='textoCentroHome'>X-Bacon</Card.Title>
                <Card.Text className='textoCentroHome'>
                  Pão, carne, queijo e bacon.
                  <h6>Preço R$ 15,00</h6>
                </Card.Text>
                <div className='textoCentroHome'>
                  <Button className='button' variant="info" href='/#/pedido'><strong>EU QUERO</strong></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className='colunasHome'>
            <Card style={{ width: '15rem', height: '20.5rem' }} className='rosa'>
              <Card.Img variant="top" type='image/png' src={Xburguer} className='fotosHome' />
              <Card.Body>
                <Card.Title className='textoCentroHome'>X-Burger</Card.Title>
                <Card.Text className='textoCentroHome'>
                  Pão, carne, queijo e picles.
                  <br />
                  <h6>Preço R$ 15,00</h6>
                </Card.Text>
                <div className='textoCentroHome'>
                  <Button className='button' variant="info" href='/#/pedido'><strong>EU QUERO</strong></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className='colunasHome'>
            <Card style={{ width: '15rem', height: '20.5rem' }} className='rosa'>
              <Card.Img variant="top" type='image/png' src={Vegetariano} className='fotosHome' />
              <Card.Body>
                <Card.Title className='textoCentroHome'>Vegetariano</Card.Title>
                <Card.Text className='textoCentroHome'>
                  Pão e uma incrível salada.
                  <br />
                  <h6>Preço R$ 15,00</h6>
                </Card.Text>
                <div className='textoCentroHome'>
                  <Button className='button' variant="info" href='/#/pedido'><strong>EU QUERO</strong></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Apresentacao;
