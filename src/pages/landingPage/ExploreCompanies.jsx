import React from 'react'
import JobNav from '../../components/landingPage/navbar/JobNav'
import ExploreCompaniesHero from '../../components/landingPage/exploreCompanies/ExploreCompaniesHero'
import Companies from '../../components/landingPage/exploreCompanies/Companies'
import BeforeApply from '../../components/landingPage/exploreCompanies/BeforeApply'

const ExploreCompanies = () => {
  return (
    <div>
        {/* <JobNav/> */}
        <ExploreCompaniesHero/>
        <Companies/>
        <BeforeApply/>
    </div>
  )
}

export default ExploreCompanies