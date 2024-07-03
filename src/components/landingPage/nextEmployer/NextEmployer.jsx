import React from 'react'
import {Button, Link} from "@nextui-org/react";
import { IoArrowForward } from "react-icons/io5";
import EmployerCard from './EmployerCard';

const NextEmployer = () => {
  return (
    <div className='m-12 pt-5'>
        <div className='flex justify-between'>
          <div>
          <p className='text-purple4 font-bold text-3xl'>Find your next employer</p>
          <p className="mb-5 text-grey1 text-lg font-light">Join ProPath to find career opportunities that match your skills and ambitions for a fulfilling professional journey.</p>
          </div>
          <Button as={Link} className='bg-white outline-purple1 text-purple1 font-semibold py-6 mt-2' href="#" variant="flat">
          View all<IoArrowForward/>
          </Button>
        </div>
        <div className='flex justify-between mt-6'>
          <EmployerCard/>
          <EmployerCard/>
          <EmployerCard/>
          <EmployerCard/>
          <EmployerCard/>
        </div>
    </div>
  )
}

export default NextEmployer