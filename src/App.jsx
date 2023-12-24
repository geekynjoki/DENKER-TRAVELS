import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Packages from './Components/Pages/Packages'
import About from './Components/Pages/About'
import Gallery from './Components/Pages/Gallery'
import Vehicles from './Components/Pages/Vehicles'
import Contact from './Components/Pages/Contact'
import Enquiries from './Components/Pages/Enquiries'





function App () {
  return (
    <>
<Router>
  <Navbar></Navbar>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/packages' element={<Packages/>}></Route>
    <Route path='/gallery' element={<Gallery/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/vehicles' element={<Vehicles/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/enquiries' element={<Enquiries/>}></Route>
  </Routes>
</Router>
<Main></Main>
<Footer></Footer>
</>

  )
}

export default App;


