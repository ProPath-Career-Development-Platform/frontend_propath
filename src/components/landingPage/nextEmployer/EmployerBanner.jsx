import React from 'react';
import bgimage from '/nextEmployer.jpg'
import {Button, Link} from "@nextui-org/react";

const EmployerBanner = () => {
  return (
    <div className='relative flex mx-48 rounded-3xl h-96 mb-12'>
      <div className='relative flex flex-col w-full h-full rounded-3xl bg-cover bg-center' style={{ backgroundImage: `url(${bgimage})` }}>
        <div className='pt-16 w-7/12 ml-8'>
          <h1 className='text-purple2 text-5xl font-semibold'>Looking for the best candidates to hire ?</h1>
          <p className="mb-5 text-grey1 text-lg mt-8 font-light">
            We make it quicker and easier to find the right people for your company. Post jobs in the leading job marketplace in Sri Lanka.
          </p>
          <Button as={Link} className='bg-purple2 text-white font-semibold mt-2' href="#" variant="flat">
            Post a Job
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EmployerBanner