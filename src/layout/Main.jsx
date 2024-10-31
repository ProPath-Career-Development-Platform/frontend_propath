import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import TopNav from '../components/landingPage/navbar/TopNav'
import Footer from '../components/landingPage/footer/Footer'
import JobNav from '../components/landingPage/navbar/JobNav'

const Main = () => {
  return (
    <div>
        {/* <TopNav/> */}
        <JobNav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main