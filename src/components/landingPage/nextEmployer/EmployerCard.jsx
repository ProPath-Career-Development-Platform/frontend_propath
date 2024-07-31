import React from 'react'
import {Card, CardBody, CardFooter, Image, Chip} from "@nextui-org/react";
import logo from '/google-logo.jpg'

const EmployerCard = () => {
  return (
    <div>
        <Card shadow="sm" className='px-5 pb-3' isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              radius="lg"
              width="100%"
              alt='employer logo'
              className="p-5 object-cover h-[140px]"
              src={logo}
            />
          </CardBody>
          <CardFooter className="justify-between">
            <b className='text-lg'>Google</b>
            <Chip color="default">10 Jobs</Chip>
          </CardFooter>
        </Card>
    </div>
  )
}

export default EmployerCard