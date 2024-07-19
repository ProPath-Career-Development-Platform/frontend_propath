import React from 'react'
import {Card, CardHeader, CardBody, Image, CardFooter, Link} from "@nextui-org/react";
import employerStep1 from '/employerSteps1.png'
import employerStep2 from '/employerSteps2.png'
import employerStep3 from '/employerSteps3.png'

const Steps = () => {
  return (
    <div className='bg-[#f4f4f4] px-12 pt-16 pb-10'>
        <p className='text-purple4 font-bold text-4xl flex justify-center mb-24'>Start hiring in 3 simple steps</p>
        <div className='flex gap-16 my-16 justify-center '>
            <Card className="py-4 max-w-80">
                <h4 className="flex font-bold text-2xl text-purple1 m-auto">Step 1</h4>
                <CardBody className="overflow-visible items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={employerStep1}
                    width={270}
                    />
                </CardBody>
                <CardHeader className="pb-0 px-8 flex-col text-center">
                    <p className="text-sm uppercase font-bold">Register securely online</p>
                    <small className="text-default-500">Create and verify an account with your email address</small>                    
                </CardHeader>
                <CardFooter className='justify-center'>
                    <Link className='cursor-pointer flex text-center'>CREATE ACCOUNT</Link>
                </CardFooter>
            </Card>           
            <Card className="py-4 max-w-80">
                <h4 className="flex font-bold text-2xl text-purple1 m-auto">Step 2</h4>
                <CardBody className="overflow-visible items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={employerStep2}
                    width={270}
                    />
                </CardBody>
                <CardHeader className="pb-0 px-8 flex-col text-center">
                    <p className="text-sm uppercase font-bold">Post your job ad</p>
                    <small className="text-default-500">Our step-by-step guide helps you create a great job ad</small>                   
                </CardHeader>
                <CardFooter className='justify-center'>
                    <Link className='cursor-pointer flex text-center'>POST A JOB</Link>
                </CardFooter>
            </Card> 
            <Card className="py-4 max-w-80">
                <h4 className="flex font-bold text-2xl text-purple1 m-auto">Step 3</h4>
                <CardBody className="overflow-visible items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={employerStep3}
                    width={270}
                    />
                </CardBody>
                <CardHeader className="pb-0 px-8 flex-col text-center">
                    <p className="text-sm uppercase font-bold">Sort applications easily</p>
                    <small className="text-default-500">Our tools make it easy to identify the best people for your job</small>                   
                </CardHeader>
                <CardFooter className='justify-center'>
                    <Link className='cursor-pointer flex text-center'>PUBLISHED JOBS</Link>
                </CardFooter>
            </Card> 
        </div>
    </div>
  )
}

export default Steps