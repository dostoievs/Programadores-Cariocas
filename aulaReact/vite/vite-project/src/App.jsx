// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import Button from './components/Button'
import NovaTarefa from './components/NovaTarefa.'
import GetAxios from './components/GetAxios'
import PostAxios from './components/PostAxios'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a> */}
        {/* <a href="https://reactjs.org" target="_blank"> */}
          <img src={reactLogo} width="120px"/>
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> ORIGINAL*/}
        {/* </a> */}
      </div>
      <h1>Primeiro Projeto React com Vite</h1>
      <Form></Form>
      <Button cor="Branco"/>
      <Button cor="Preto"/>
      <NovaTarefa/>
      <GetAxios/>
      <PostAxios/>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          <h1>Devair Martins</h1>
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
