import React from 'react'
import {Button, Link} from "@nextui-org/react";
import FieldCard from './FieldCard';

const Fields = () => {
  return (
    <div className='m-12 py-10'>
        <p className='text-purple4 font-bold text-3xl'>Browse workshops by your field</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 mx-28">
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
            <FieldCard/>
        </div>
        <div className='flex items-center justify-center my-10'>
          <Button as={Link} className='bg-white outline-purple1 text-purple1 font-semibold mt-2' href="#" variant="flat">
          Show More
          </Button>
        </div>
        
    </div>
  )
}

export default Fields