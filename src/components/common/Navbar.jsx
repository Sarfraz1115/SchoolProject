import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full bg-white shadow z-50'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 h-16'>
        <h1 className='text-xl font-bold text-blue-600'>Milliya Girls High School</h1>
        <div className='space-x-6'>
          <Link to='/' className='text-gray-600 hover:text-blue-600'>Home</Link>
          <Link to='/about' className='text-gray-600 hover:text-blue-600'>About</Link>
          <Link to='/contact' className='text-gray-600 hover:text-blue-600'>Contact</Link>
          <Link to='/courses' className='text-gray-600 hover:text-blue-600'>Courses</Link>
          <Link to='/gallery' className='text-gray-600 hover:text-blue-600'>Gallery</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar