import React from 'react'
import EmployerNavbar from '../../components/landingPage/employerSite/EmployerNavbar'
import EmployerHero from '../../components/landingPage/employerSite/EmployerHero'
import Steps from '../../components/landingPage/employerSite/Steps'
import SubPlans from '../../components/landingPage/employerSite/SubPlans'

const EmployerSite = () => {
  return (
    <div>
        <EmployerNavbar/>
        <EmployerHero/>
        <Steps/>
        <SubPlans/>
    </div>
  )
}

export default EmployerSite