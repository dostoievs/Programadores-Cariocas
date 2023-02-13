
import LogoJS from './assets/javascript.svg'
import logoHan from './assets/logo.jpg'
/*import './App.css'*/
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <NavBar/>
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