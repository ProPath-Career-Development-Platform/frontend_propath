import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Chip} from "@nextui-org/react";


const VacancyCard = () => {
  return (
    <Card className="max-w-[300px]">
      <CardHeader className='mb-0 pb-0'>
          <p className="text-lg font-semibold">Frontend Developer</p>
      </CardHeader>
      <CardBody className='pb-5'>
        <Chip className='bg-blue1 text-white'>413 Open Positions</Chip>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link href="#">View all openings</Link>
      </CardFooter>
    </Card>
  )
}

export default VacancyCard