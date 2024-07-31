import React from 'react'
import bgimage from '/employer-banner.jpg'
import {Button, Link} from "@nextui-org/react";

const EmployerHero = () => {
  return (
    <div className='relative flex' style={{height:'65vh'}}>
      <div className='relative flex flex-col w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${bgimage})` }}>
      <div className='flex justify-end w-full h-full px-10'>
          <div className=' pt-16 w-1/2 '>
            <h1 className='text-purple4 text-5xl font-bold'>Hire the right people for your business</h1>
            <p className="mb-5 text-[#403f3f] text-xl mt-6">
              We make it quicker and easier to find the right people for your company. Get access to the leading job marketplace in Sri Lanka.
            </p>
            <Button as={Link} className='bg-purple4 text-white font-semibold mt-2' href="#" variant="flat">
              Post a Job
            </Button>
            <div className='pt-12'>
              <p>Need help? Reach out to us on</p>
              <p><b>1300 658 700</b>  |  Mon - Fri, 7am - 7pm (GMT+5:30)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployerHero