import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Layout from '../Layout/layout'
import About from '../Pages/About'
import Courses from '../Pages/Courses'
import Gallery from '../Pages/Gallery'
import Contact from '../Pages/Contact'

const Approutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Approutes