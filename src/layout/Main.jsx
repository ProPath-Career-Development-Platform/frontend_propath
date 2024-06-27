import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import TopNav from '../components/landingPage/navbar/TopNav'

const Main = () => {
  return (
    <div>
        <TopNav/>
        <Outlet/>
        <footer>footer</footer>
    </div>
  )
}

export default Main