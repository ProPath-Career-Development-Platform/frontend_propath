import React from 'react'
import bgimage from '/exploreCompanies.jpg'
import {Input} from "@nextui-org/react";
import { IoMdSearch } from "react-icons/io";

const ExploreCompaniesHero = () => {
  return (
    <div className='relative flex' style={{height:'65vh'}}>
      <div className='relative flex flex-col w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${bgimage})`}}>
      <div className='flex items-center flex-col justify-center w-full h-full px-10'>
          <h1 className='text-white text-6xl font-semibold'>Find the right company for you</h1>
          <p className="mb-5 text-[#d8d8d8] text-xl font-light mt-5">
              Everything you need to know about a company, all in one place
          </p>
          <Input
            type="text"
            placeholder="Search by company name"
            startContent={
              <IoMdSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            className='w-96 pt-8'
          />
        </div>
      </div>
    </div>
  )
}

export default ExploreCompaniesHero