import React, {useState} from 'react';
import bgimage from '/heroLanding1.jpg'
import { FaBriefcase } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import {Button, Link} from "@nextui-org/react";
import ApplyATS from './applyATS';

const Banner = () => {
  const [open1,setOpen1] = useState(false)
  return (

    <div className='relative flex'>
      <div className='relative w-1/2'>
        <img src={bgimage} alt="Background" className=' inset-0 object-cover overflow-hidden' />
      </div>
      <div className='relative flex flex-col h-full w-1/2'>
        <div className='mx-auto pt-16 w-3/4 ml-8'>
          <h1 className='text-purple1 text-5xl font-bold'>Find your dream job or let companies find you.</h1>
          <p className="mb-5 text-grey1 text-lg mt-8 font-light">Join ProPath to find career opportunities that match your skills and ambitions for a fulfilling professional journey.</p>
         
          <ApplyATS open1={open1}></ApplyATS>
          

           
         
          {/* <Button as={Link} className='bg-purple1 text-white font-semibold py-6 mt-2' href="#" variant="flat">
            Join Now
          </Button> */}
        </div>
        {/* <div className='card-container flex flex-row gap-20 mt-16 ml-8'>
          <div className='cards flex flex-row'>
            <div className='flex items-center justify-center w-16 h-16 border-2 border-purple2 rounded-full mr-4'>
              <FaBriefcase className='text-purple2 text-4xl'/>
            </div>
            <div>
              <h1 className='text-3xl text-purple2 font-bold'>7,542</h1>
              <p className='text-grey1 font-light'>Live Jobs</p>
            </div>
          </div>
          <div className='cards flex flex-row'>
            <div className='flex items-center justify-center w-16 h-16 border-2 border-purple2 rounded-full mr-4'>
              <FaBuilding className='text-purple2 text-4xl'/>
            </div>
            <div>
              <h1 className='text-3xl text-purple2 font-bold'>9,452</h1>
              <p className='text-grey1 font-light'>Companies</p>
            </div>
          </div>
          <div className='cards flex flex-row'>
            <div className='flex items-center justify-center w-16 h-16 border-2 border-purple2 rounded-full mr-4'>
              <FaUserAlt className='text-purple2 text-4xl'/>
            </div>
            <div>
              <h1 className='text-3xl text-purple2 font-bold'>29,452</h1>
              <p className='text-grey1 font-light'>Candidates</p>
            </div>
          </div>
        </div> */}
        {/* <div className="flex w-1/2 flex-wrap md:flex-nowrap gap-2 mt-10 bg-purple1 bg-opacity-30 p-3 rounded-lg">
          <Input type="title" label="Job Title" className='h-12'/>
          <Input type="location" label="Location" className='h-12'/>
          <Button as={Link} className='bg-[#6756a8] text-white font-semibold px-9 py-6' href="#" variant="flat">
            Find Job
          </Button>
        </div> */}
      </div>
    </div>
  )
}

export default Banner