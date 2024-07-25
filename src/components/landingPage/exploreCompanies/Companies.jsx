import React from 'react'
import CompanyCard from './CompanyCard'
import { Button, Link } from '@nextui-org/react'
import { IoArrowForward } from "react-icons/io5";

const Companies = () => {
  return (
    <div className='m-12 pt-5'>
        <div className='flex justify-between'>
          <div>
          <p className='text-purple4 font-bold text-3xl'>Explore companies</p>
          <p className="mb-5 text-grey1 text-lg font-light">Learn about new jobs, reviews, company culture, perks and benefits.</p>
          </div>
          <Button as={Link} className='bg-white outline-purple1 text-purple1 font-semibold mt-2' href="#" variant="flat">
          View all<IoArrowForward/>
          </Button>
        </div>
        <div className='flex justify-between mt-6'>
          <CompanyCard/>
          <CompanyCard/>
          <CompanyCard/>
          <CompanyCard/>
          <CompanyCard/>
        </div>
    </div>
  )
}

export default Companies