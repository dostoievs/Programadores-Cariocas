
import LogoJS from './assets/javascript.svg'
/*import './App.css'*/
import 'bootstrap/dist/css/bootstrap.min.css'
{/*import Form from './components/Form'
import NovaTarefa from './components/NovaTarefa'*/}
import GetAxios from './components/GetAxios'
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
        <img src={LogoJS} width="120px" />
      </div>
      <div className='row d-flex justify-content-center'>
        <h2 className='w-100 col-6'>Primeiro Projeto React com Vite</h2>
        <Outlet className='w-100 col-6'/>
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