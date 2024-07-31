import React from 'react'
import {Card, CardBody, CardFooter, Image,  Divider} from "@nextui-org/react";
import logo from '/google-logo.jpg'

const WorkshopCard = () => {
  return (
    <div>
        <Card shadow="sm" className='px-3 pb-5 min-w-80 max-w-72' isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              radius="lg"
              width="100%"
              alt='employer logo'
              className="p-5 object-contain h-[140px]"
              src={logo}
            />
          </CardBody>
          <CardFooter className="flex flex-col items-start gap-y-2">
            <b className='text-lg'>Performance and Developer Productivity</b>
            <Divider className='my-2'/>
            <div className='flex flex-row justify-between w-full'>
                <b>Location</b>
                <p>Online</p>
            </div> 
            <div className='flex flex-row justify-between w-full'>
                <b>Date</b>
                <p>July 25, 2024</p>
            </div> 
            <div className='flex flex-row justify-between w-full'>
                <b>Time</b>
                <p>10:00 - 13:00</p>
            </div> 
          </CardFooter>
        </Card>
    </div>
  )
}

export default WorkshopCard