import React from 'react'
import JobNav from '../components/landingPage/navbar/JobNav'
import HeroLanding from '../components/landingPage/hero/HeroLanding'
import JobSearch from '../components/landingPage/jobSearch/JobSearch'
import PopularVacancies from '../components/landingPage/popularVacancies/PopularVacancies'
import HowPropathWorks from '../components/landingPage/howPropathWorks/HowPropathWorks'
import NextEmployer from '../components/landingPage/nextEmployer/NextEmployer'
import EmployerBanner from '../components/landingPage/nextEmployer/EmployerBanner'
// import '../App.css'

const Home = () => {
  return (
    <div>
      {/* <JobNav/> */}
      <HeroLanding/>
      <JobSearch/>
      <PopularVacancies/>
      <HowPropathWorks/>
      <NextEmployer/>
      <EmployerBanner/>
    </div>
  )
}

export default Home