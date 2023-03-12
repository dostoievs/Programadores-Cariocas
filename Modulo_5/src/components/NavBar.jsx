import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import logo from '../assets/react.svg'
import {Link} from 'react-router-dom';
import Style from './NavBar.module.css'
import logoHan from '../assets/logo.jpg'
import Badge from 'react-bootstrap/Badge';
import './NavBar.module.css'

function NavBar() {
  return (
    <>
      <Navbar style={{backgroundColor: "blue"}} variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logoHan}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <strong>Han?Burgueria</strong>
          </Navbar.Brand>

          <Navbar style={{backgroundColor: "blue"}} variant="dark">
        <Container>
          <Nav className="me-auto row">
            <Nav className='col'><Link to='/cardapio' className={Style.links}><strong>Cardápio</strong></Link></Nav>
            <Nav className='col'><Link to='/sobre' className={Style.links}><strong>Sobre</strong></Link></Nav>
            <Nav className='col'><Link to='/contato' className={Style.links}><strong>Contato</strong></Link></Nav>
            <Nav className='col'><Link to='/autores' className={Style.links}><strong>Autores</strong></Link></Nav>
            <Nav className='col'><Link to='/pedidos' className={Style.links}><img src='https://github.com/davidlgomes/Programadores-Cariocas/blob/main/Modulo_5/src/assets/shopping-cart.png?raw=true'/><Badge bg="light" style={{color:'black'}}>0</Badge></Link></Nav>
          </Nav>     
        </Container>
      </Navbar>
        </Container>
        <Nav className="d-flex flex-row bd-highlight mb-3">
            <Nav className='p-2 bd-highlight'><Link to='/login' className={Style.links}><strong>Login</strong></Link></Nav>
            <Nav className='p-2 bd-highlight'><Link to='/cadastro' className={Style.links}><strong>Cadastre-se</strong></Link></Nav>
          </Nav>   
      </Navbar>
      
    </>
  );
}

export default NavBar;