import React from 'react'
import { Button, Link } from '@nextui-org/react'
import { IoArrowForward } from "react-icons/io5";
import MembershipCard from './MembershipCard'

const Memberships = () => {
  return (
    <div>
      <div className='px-12 py-20 bg-[#f7f5f5]'>
        <div className='flex justify-between'>
          <div>
          <p className='text-purple4 font-bold text-3xl'>Explore your workshop options in one place</p>
          <p className="mb-5 text-grey1 text-lg font-light">You might be interested in these workshops</p>
          </div>
          <Button as={Link} className='bg-purple4 text-white font-semibold mt-2' href="#" variant="flat">
          View all<IoArrowForward/>
          </Button>
        </div>
        <div className='flex justify-between mt-16 mb-4'>
          <MembershipCard/>
          <MembershipCard/>
          <MembershipCard/>
          <MembershipCard/>
        </div>
      </div>
    </div>
  )
}

export default Memberships