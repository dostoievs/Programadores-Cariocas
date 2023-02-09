
import LogoJS from './assets/javascript.svg'
import logoHan from './assets/logo.jpg'
/*import './App.css'*/
import 'bootstrap/dist/css/bootstrap.min.css'
{/*import Form from './components/Form'
import NovaTarefa from './components/NovaTarefa'*/}
import ExibirCardapio from './components/ExibirCardapio'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
{/*import BotaoUseEffect from './components/BotaoUseEffect'
import DeleteAxios from './components/DeleteAxios'
import PutAxios from './components/PutAxios'*/}
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
      {/* 
      <GetAxios />
      <Form />
      <br />
      <NovaTarefa />
      <DeleteAxios/>
      <PutAxios/> */}

      {/* <BotaoUseEffect/> */}
    </div>
  )
}
export default App