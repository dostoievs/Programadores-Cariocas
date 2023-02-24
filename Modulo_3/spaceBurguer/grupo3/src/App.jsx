// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import Header from './components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer/Footer'

// import './App.css'


function App() {
  return (
    
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
   
  )
}

export default App
