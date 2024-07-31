import React from 'react'
import {Card, CardBody, CardFooter, Image, Chip, Button, Link} from "@nextui-org/react";
import logo from '/google-logo.jpg'
import { FaStar } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";

const CompanyCard = () => {
  return (
    <div>
        <Card shadow="sm" className='px-5 pb-5' isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              radius="lg"
              width="100%"
              alt='employer logo'
              className="p-5 object-cover h-[140px]"
              src={logo}
            />
          </CardBody>
          <CardFooter className="flex flex-col items-start gap-y-2">
            <b className='text-lg'>Google</b>
            <div className='flex gap-2'>
                <FaStar className='text-[#e6b655] text-xl'/>
                <p>3.5 - 167 Ratings</p>
            </div>
            <Chip className='bg-[#d0e5f9]'>13 Jobs</Chip>
          </CardFooter>
          <div className='flex items-center justify-center w-full mt-3'>
            <Button as={Link} className='bg-purple4 text-white font-semibold flex items-center' href="#" variant="flat">
                <FaPen className='mr-2' />Write a Review
            </Button>
          </div>
        </Card>
    </div>
  )
}

export default CompanyCard