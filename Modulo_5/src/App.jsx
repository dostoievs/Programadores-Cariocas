
import LogoJS from './assets/javascript.svg'
import logoHan from './assets/logo.jpg'
/*import './App.css'*/
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Header from './components/Header'
import { useRef } from 'react';
function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div className="App">
      {windowSize.current[0]<767?<Header/>:<NavBar/>}
      {console.log(`${windowSize.current[0]} x ${windowSize.current[1]}`)}
      <div className='d-flex justify-content-center'>
        <img src={logoHan} width="400px"/>
      </div>
      <div className='d-flex justify-content-center'>
        <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}
export default App