import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

const layout = () => {
    return (
        <>
            <Navbar />
            <main className='min-h-screen pt-16'><Outlet /></main>
            <Footer />

        </>
    )
}

export default layout