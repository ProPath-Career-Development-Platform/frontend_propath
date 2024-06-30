import React from 'react'
import './HowPropathWorks.css'
import {Card, CardHeader, CardBody, CardFooter, Link} from "@nextui-org/react";
import { IoPersonAddSharp } from "react-icons/io5";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { AiOutlineFileDone } from "react-icons/ai";

const HowPropathWorks = () => {
  return (
    <div className='bg-[#f3f3f3] px-12 pt-24 pb-10'>
        <p className='text-purple4 font-bold text-4xl flex justify-center mb-24'>How ProPath Works</p>
        <div className='flex gap-20 my-16 justify-center '>
            <Card className="max-w-[300px] bg-[#f3f3f3] shadow-none">
                <CardHeader className='justify-center'>
                    <p className="text-2xl font-semibold flex text-center">Step 1</p>
                </CardHeader>
                <CardBody>
                    <div className="flex justify-center m-auto items-center bg-purple2 rounded-full w-16 h-16">
                        <IoPersonAddSharp size={36} color="white" className='IoPersonAddSharp'/>
                    </div>
                    <div className='flex flex-col mt-7 text-center'>
                        <p className="text-2xl font-semibold text-purple2">Create Account</p>
                        <p className='text-grey1'>First, you need to create an account</p>
                    </div>                   
                </CardBody>
                <CardFooter className='justify-center'>
                    <Link className='cursor-pointer flex text-center'>CREATE ACCOUNT</Link>
                </CardFooter>
            </Card>
            <Card className="max-w-[300px] bg-[#f3f3f3] shadow-none">
                <CardHeader className='justify-center'>
                    <p className="text-2xl font-semibold">Step 2</p>
                </CardHeader>
                <CardBody>
                    <div className="flex justify-center m-auto items-center bg-purple2 rounded-full w-16 h-16">
                        <BiSolidSearchAlt2 size={36} color="white" className='BiSolidSearchAlt2'/>
                    </div>
                    <div className='flex flex-col mt-7 text-center'>
                        <p className="text-2xl font-semibold text-purple2">Find Job</p>
                        <p className='text-grey1'>Second, search for the job you want</p>
                    </div>                   
                </CardBody>
                <CardFooter className='justify-center'>
                    <Link className='cursor-pointer'>FIND JOB</Link>
                </CardFooter>
            </Card>
            <Card className="max-w-[300px] bg-[#f3f3f3] shadow-none">
                <CardHeader className='justify-center'>
                    <p className="text-2xl font-semibold">Step 3</p>
                </CardHeader>
                <CardBody>
                    <div className="flex justify-center m-auto items-center bg-purple2 rounded-full w-16 h-16">
                        <AiOutlineFileDone size={36} color="white" className=''/>
                    </div>
                    <div className='flex flex-col mt-7 text-center'>
                        <p className="text-2xl font-semibold text-purple2">Apply Job</p>
                        <p className='text-grey1'>Third, apply for the job you want</p>
                    </div>                   
                </CardBody>
                <CardFooter className='justify-center'>
                    <Link className='cursor-pointer'>LEARN MORE</Link>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}

export default HowPropathWorks