import React from 'react'
import Header from '../header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Footer from '../footer/Footer'
import { Container } from 'react-bootstrap'


const Main = () => {
  return (
    <div className='main'>
      <Header/>
      <Container >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default Main