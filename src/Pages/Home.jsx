import React from 'react'
import Herosection from '../components/home/Herosection'
import Gallery from '../components/home/Gallery'
import Aboutsection from '../components/home/Aboutsection'
import Ceocardsection from '../components/home/Ceocardsection'
import Threebox from '../components/home/Threebox'

const Home = () => {
  return (
    <>
      <Herosection />
      <Ceocardsection/>
      <Aboutsection/>
      <Threebox/>
      <Gallery />
      
    </>
  )
}

export default Home