import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Componants/Navbar'
import Footer from './Pages/Footer'

const App = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,   
    });
  }, []);
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    
    </>
  )
}

export default App