import React from 'react'
import './JobSearch.css'
import {Input, Button, Link, Select, SelectItem} from "@nextui-org/react";

const JobSearch = () => {
  return (
    <div className='job-search py-12 flex justify-center'>
      <div className="flex flex-row gap-1 w-7/12 justify-normal">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-1 align-middle">
          <Input type="text" label="Job Title" size='sm' />
          <Select
            label="Category"
            selectionMode="multiple"
            size='sm'
          >
          </Select>
          <Input type="text" label="Location" size='sm' />
        </div> 
        <Button as={Link} className='bg-white text-purple2 font-semibold py-6' href="#" variant="flat">
            Search
        </Button>
      </div>
    </div>
  )
}

export default JobSearch