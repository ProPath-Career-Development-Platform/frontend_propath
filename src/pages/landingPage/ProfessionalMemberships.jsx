import React from 'react'
import ProfessionalMembershipsNav from '../../components/landingPage/professionalMemberships/ProfessionalMembershipsNav'
import ProfessionalMembershipHero from '../../components/landingPage/professionalMemberships/ProfessionalMembershipHero'
import Institutes from '../../components/landingPage/professionalMemberships/Institutes'
import Memberships from '../../components/landingPage/professionalMemberships/Memberships'

const ProfessionalMemberships = () => {
  return (
    <div>
        {/* <ProfessionalMembershipsNav/> */}
        <ProfessionalMembershipHero/>
        <Institutes/>
        <Memberships/>
    </div>
  )
}

export default ProfessionalMemberships