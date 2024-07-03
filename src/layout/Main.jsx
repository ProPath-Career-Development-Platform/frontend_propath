import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import TopNav from '../components/landingPage/navbar/TopNav'
import Footer from '../components/landingPage/footer/Footer'

const Main = () => {
  return (
    <div>
        <TopNav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main