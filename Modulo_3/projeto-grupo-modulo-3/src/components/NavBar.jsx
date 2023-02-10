import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import logo from '../assets/react.svg'
import {Link} from 'react-router-dom';
import Style from './NavBar.module.css'
import logoHan from '../assets/logo.jpg'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logoHan}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Projeto React
          </Navbar.Brand>

          <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto row">
            <Nav className='col'><Link to='/cardapio' className={Style.links}>Cardápio</Link></Nav>
            <Nav className='col'><Link to='/sobre' className={Style.links}>Sobre</Link></Nav>
            <Nav className='col'><Link to='/pedidos' className={Style.links}>Pedidos</Link></Nav>
            <Nav className='col'><Link to='/contato' className={Style.links}>Contato</Link></Nav>
          </Nav>
        </Container>
      </Navbar>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;