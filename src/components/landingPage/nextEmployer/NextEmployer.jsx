import React from 'react'
import {Button, Link, Card, CardBody, CardFooter, Image, Chip} from "@nextui-org/react";
import { IoArrowForward } from "react-icons/io5";
import EmployerCard from './EmployerCard';
import logo from '/wso2.png'
import logo2 from '/cinnamon-logo.png'
import logo3 from '/LSEG-logo.png'

const NextEmployer = () => {
  return (
    <div className='m-12 pt-5'>
        <div className='flex justify-between'>
          <div>
          <p className='text-purple4 font-bold text-3xl'>Find your next employer</p>
          <p className="mb-5 text-grey1 text-lg font-light">Join ProPath to find career opportunities that match your skills and ambitions for a fulfilling professional journey.</p>
          </div>
          <Button as={Link} className='bg-white outline-purple1 text-purple1 font-semibold mt-2' href="#" variant="flat">
          View all<IoArrowForward/>
          </Button>
        </div>
        <div className='flex justify-between mt-6'>
          <Card shadow="sm" className='px-3 pb-3 w-64' isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                radius="lg"
                width="100%"
                alt='employer logo'
                className="p-5 object-contain h-[140px]"
                src={logo}
              />
            </CardBody>
            <CardFooter className="justify-between">
              <b className='text-lg'>WSO2</b>
              <Chip color="default">3 Jobs</Chip>
            </CardFooter>
          </Card>
          <Card shadow="sm" className='px-3 pb-3 w-64' isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                radius="lg"
                width="100%"
                alt='employer logo'
                className="p-5 object-contain h-[140px]"
                src='https://syscolabs.lk/Sysco_LABS_Logo_Blue.png'
              />
            </CardBody>
            <CardFooter className="justify-between">
              <b className='text-lg'>Sysco Labs</b>
              <Chip color="default">5 Jobs</Chip>
            </CardFooter>
          </Card>
          <Card shadow="sm" className='px-3 pb-3 w-64' isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                radius="lg"
                width="100%"
                alt='employer logo'
                className="p-5 object-contain h-[140px]"
                src='https://lmd100.lk/wp-content/uploads/2020/01/john-keells-holdings-logo.png'
              />
            </CardBody>
            <CardFooter className="justify-between">
              <b className='text-lg'>John Keells</b>
              <Chip color="default">23 Jobs</Chip>
            </CardFooter>
          </Card>
          <Card shadow="sm" className='px-3 pb-3 w-64' isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                radius="lg"
                width="100%"
                alt='employer logo'
                className="p-5 object-contain h-[140px]"
                src={logo2}
              />
            </CardBody>
            <CardFooter className="justify-between">
              <b className='text-lg'>Cinnamon</b>
              <Chip color="default">28 Jobs</Chip>
            </CardFooter>
          </Card>
          <Card shadow="sm" className='px-3 pb-3 w-64' isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                radius="lg"
                width="100%"
                alt='employer logo'
                className="p-5 object-contain h-[140px]"
                src={logo3}
              />
            </CardBody>
            <CardFooter className="justify-between">
              <b className='text-lg'>LSEG</b>
              <Chip color="default">9 Jobs</Chip>
            </CardFooter>
          </Card>
        </div>
    </div>
  )
}

export default NextEmployer