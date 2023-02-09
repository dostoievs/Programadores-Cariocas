import logo from './assets/react.svg'
import LogoJS from './assets/javascript.svg'
import './App.css'
import Form from './components/Form'
import NovaTarefa from './components/NovaTarefa'
import GetAxios from './components/GetAxios'
import BotaoUseEffect from './components/BotaoUseEffect'
import DeleteAxios from './components/DeleteAxios'
import AtualizarAxios from './components/AtualizarAxios'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<><h1>Página Home</h1></>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/novaTarefa' element={<NovaTarefa/>} />
          <Route path='/alterar' element={<AtualizarAxios/>} />
          <Route path='/deletar' element={<DeleteAxios/>} />
        </Routes>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/form'>Form</Link></li>
          <li><Link to='/novatarefa'>Nova Tarefa</Link></li>
          <li><Link to='/alterar'>Alterar</Link></li>
          <li><Link to='/'>Deletar</Link></li>
        </ul>
      </BrowserRouter>
      <div>
        <img src={LogoJS} width="120px" />
      </div>
      <h2>Primeiro Projeto React com Vite</h2>
      <Form />
      <br />
      <NovaTarefa />
      <GetAxios />
      <DeleteAxios />
      <AtualizarAxios />
      {/* <BotaoUseEffect/> */}
    </div>
  )
}
export default App