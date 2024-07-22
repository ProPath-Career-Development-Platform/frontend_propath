import React from 'react'
import {Card, CardBody, CardFooter, Image,  Divider} from "@nextui-org/react";

const MembershipCard = () => {
  return (
    <div>
        <Card shadow="sm" className='px-3 pb-5 min-w-80 max-w-80' isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              radius="lg"
              width="100%"
              alt='employer logo'
              className="pt-5 px-10 object-contain h-[140px]"
              src='https://cpmsrilanka.org/wp-content/uploads/2021/09/logo.png'
            />
          </CardBody>
          <CardFooter className="flex flex-col items-start gap-y-2">
            <b className='text-lg'>Associate(ACPM)</b>
            <Divider className='my-2'/>
            <div className='flex flex-col items-start w-full'>
                <b>Who is it?</b>
                <p className='text-left'>Junior and Middle Level Managers and Executives</p>
            </div> 
            <div className='flex flex-col items-start w-full'>
                <b>Criteria</b>
                <p className='text-left'>A degree or equivalent professional qualification with a minimum of 03 years of experience</p>
            </div> 
          </CardFooter>
        </Card>
    </div>
  )
}

export default MembershipCard