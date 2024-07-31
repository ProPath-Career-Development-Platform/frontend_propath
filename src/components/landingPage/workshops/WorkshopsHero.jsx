import React from 'react';
import bgimage from '/workshophero.jpg';
import { Input, Button, Link, Select } from '@nextui-org/react';
import { IoMdSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const WorkshopsHero = () => {
  return (
    <div className='relative flex flex-col' style={{ height: '65vh' }}>
      <div className='absolute w-full h-full'>
        <img src={bgimage} alt="Background" className='w-full h-full object-cover blur-sm' />
      </div>
      <div className='relative flex flex-col w-full h-full bg-cover bg-center'>
        <div className='flex items-center flex-col justify-center w-full h-full m-auto'>
          <h1 className='text-white text-center text-5xl font-bold'>Elevate Your Career with Expert-Led Workshops</h1>
          <p className='mb-5 text-[#d8d8d8] text-center text-xl mt-5'>
          Explore and enroll in workshops designed to boost your professional skills and advance your career.
          </p>
          <div className="flex flex-row pt-10 gap-1 w-1/2 justify-normal">
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-1 align-middle">
              <Select
                placeholder="Accounting, Business, ..."
                selectionMode="multiple"
                startContent={
                  <IoMdSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                >
              </Select>
              <Input 
                type="text" 
                placeholder='Enter the location'
                startContent={
                  <IoLocationOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }/>
            </div> 
            <Button as={Link} className='bg-white text-purple1 font-semibold' href="#" variant="flat">
                Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsHero;