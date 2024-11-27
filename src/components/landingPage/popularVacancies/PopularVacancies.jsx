import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Chip} from "@nextui-org/react";
import VacancyCard from './VacancyCard'

const PopularVacancies = () => {
  return (
    <div className='m-12 py-5'>
        <p className='text-purple4 font-bold text-3xl mb-10'>Most Popular Vacancies</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-auto'>
          <Card className="max-w-[300px]">
            <CardHeader className='mb-0 pb-0'>
                <p className="text-lg font-semibold">Frontend Developer</p>
            </CardHeader>
            <CardBody className='pb-5'>
              <Chip className='bg-blue1 text-white'>13 Open Positions</Chip>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Link href="#">View all openings</Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[300px]">
            <CardHeader className='mb-0 pb-0'>
                <p className="text-lg font-semibold">Data Entry Clerk</p>
            </CardHeader>
            <CardBody className='pb-5'>
              <Chip className='bg-blue1 text-white'>31 Open Positions</Chip>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Link href="#">View all openings</Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[300px]">
            <CardHeader className='mb-0 pb-0'>
                <p className="text-lg font-semibold">Customer Service Officer</p>
            </CardHeader>
            <CardBody className='pb-5'>
              <Chip className='bg-blue1 text-white'>15 Open Positions</Chip>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Link href="#">View all openings</Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[300px]">
            <CardHeader className='mb-0 pb-0'>
                <p className="text-lg font-semibold">Junior Full Stack Developer</p>
            </CardHeader>
            <CardBody className='pb-5'>
              <Chip className='bg-blue1 text-white'>50 Open Positions</Chip>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Link href="#">View all openings</Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[300px]">
            <CardHeader className='mb-0 pb-0'>
                <p className="text-lg font-semibold">Receptionist</p>
            </CardHeader>
            <CardBody className='pb-5'>
              <Chip className='bg-blue1 text-white'>47 Open Positions</Chip>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Link href="#">View all openings</Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[300px]">
            <CardHeader className='mb-0 pb-0'>
                <p className="text-lg font-semibold">Junior School Teacher</p>
            </CardHeader>
            <CardBody className='pb-5'>
              <Chip className='bg-blue1 text-white'>35 Open Positions</Chip>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Link href="#">View all openings</Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[300px]">
            <CardHeader className='mb-0 pb-0'>
                <p className="text-lg font-semibold">Construction Coordinator</p>
            </CardHeader>
            <CardBody className='pb-5'>
              <Chip className='bg-blue1 text-white'>22 Open Positions</Chip>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Link href="#">View all openings</Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[300px]">
            <CardHeader className='mb-0 pb-0'>
                <p className="text-lg font-semibold">Security Operations Analyst</p>
            </CardHeader>
            <CardBody className='pb-5'>
              <Chip className='bg-blue1 text-white'>25 Open Positions</Chip>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Link href="#">View all openings</Link>
            </CardFooter>
          </Card>
        </div>
    </div>
  )
}

export default PopularVacancies