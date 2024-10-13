import React from 'react'
import Header from '../header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Main = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Main