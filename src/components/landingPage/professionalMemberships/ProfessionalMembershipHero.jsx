import React from 'react'
import bgimage from '/professionalmemberships.jpg';
import { Input, Button, Link, Select } from '@nextui-org/react';
import { IoMdSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const ProfessionalMembershipHero = () => {
  return (
    <div className='relative flex flex-col' style={{ height: '60vh' }}>
      <div className='absolute w-full h-full'>
        <img src={bgimage} alt="Background" className='w-full h-full object-cover' />
      </div>
      <div className='relative flex flex-col w-full h-full bg-cover bg-center'>
        <div className='flex items-center flex-col justify-center w-full h-full m-auto'>
          <h1 className='text-[#687b81] text-center text-5xl font-bold'>Unlock Your Professional Potential</h1>
          <p className='mb-5 text-[#838383] text-center text-xl mt-5 w-7/12'>
          Discover the perfect membership for your career growth, connect with industry leaders, and access exclusive resources tailored to your professional journey.
          </p>
          <div className="flex flex-row pt-10 gap-1 w-1/4 justify-normal">
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-1 align-middle">
              <Select
                placeholder="Select your Field ..."
                selectionMode="multiple"
                startContent={
                  <IoMdSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                >
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalMembershipHero