import React from 'react'
import Navbar from '../components/common/Navbar'
import Topheader from '../components/common/Topheader'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

const layout = () => {
    return (
        <>
            <Topheader />
            <Navbar />
            <main className='min-h-screen'><Outlet /></main>
            <Footer />

        </>
    )
}

export default layout