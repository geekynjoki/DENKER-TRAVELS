import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
<Navbar/>
<Home/>
<Main/>
<Footer/>
    </div>
  )
}

export default App;

