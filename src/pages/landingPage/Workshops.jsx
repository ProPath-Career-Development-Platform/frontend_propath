import React from 'react'
import WorkshopsHero from '../../components/landingPage/workshops/WorkshopsHero'
import WorkshopNav from '../../components/landingPage/workshops/WorkshopNav'
import Fields from '../../components/landingPage/workshops/fields/Fields'
import StartExploring from '../../components/landingPage/workshops/startExploring/StartExploring'

const Workshops = () => {
  return (
    <div>
        <WorkshopNav/>
        <WorkshopsHero/>
        <Fields/>
        <StartExploring/>
    </div>
  )
}

export default Workshops