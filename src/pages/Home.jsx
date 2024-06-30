import React from 'react'
import JobNav from '../components/landingPage/navbar/JobNav'
import HeroLanding from '../components/landingPage/hero/HeroLanding'
import JobSearch from '../components/landingPage/jobSearch/JobSearch'
import PopularVacancies from '../components/landingPage/popularVacancies/PopularVacancies'
import HowPropathWorks from '../components/landingPage/howPropathWorks/HowPropathWorks'
// import '../App.css'

const Home = () => {
  return (
    <div>
      <JobNav/>
      <HeroLanding/>
      <JobSearch/>
      <PopularVacancies/>
      <HowPropathWorks/>
    </div>
  )
}

export default Home