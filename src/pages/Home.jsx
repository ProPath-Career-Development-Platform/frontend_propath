import React from 'react'
import JobNav from '../components/landingPage/navbar/JobNav'
import HeroLanding from '../components/landingPage/hero/HeroLanding'
import JobSearch from '../components/landingPage/jobSearch/JobSearch'
// import '../App.css'

const Home = () => {
  return (
    <div>
      <JobNav/>
      <HeroLanding/>
      <JobSearch/>
    </div>
  )
}

export default Home