import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Chip, Button} from "@nextui-org/react";
import { FaCheckCircle } from "react-icons/fa";

const SubPlans = () => {
  return (
    <div className='flex flex-col items-center py-16'>
        <p className='text-purple4 font-bold text-4xl flex justify-center mb-24'>Choose Your Plan</p>
        <div className='flex items-center gap-10'>
            <Card className="min-w-[350px] py-5">
                <CardHeader className="pb-0 px-8">
                    <Chip style={{ color: '#6756a8', fontWeight: 'bold', background:'#fff', borderColor: '#6756a8', borderWidth: '2px' }}>Basic</Chip>                  
                </CardHeader>
                <CardBody className='mx-5 pt-5 max-w-[310px]'>
                    <p className="text-xl uppercase font-bold mb-7">Basic Recruiter</p> 
                    <Divider className='w-full m-auto'/>
                    <div className='flex flex-col mt-7'>
                        <div className='flex flex-row items-center mb-3'>
                            <FaCheckCircle className='text-[#6756a8] mr-3'/>
                            <p>Post 1 Job</p>
                        </div>
                        <div className='flex flex-row items-center mb-3'>
                            <FaCheckCircle className='text-[#6756a8] mr-3'/>
                            <p>10 days Resume visibility</p>
                        </div>
                        <div className='flex flex-row items-center mb-3'>
                            <FaCheckCircle className='text-[#6756a8] mr-3'/>
                            <p>24/7 Critical support</p>
                        </div>  
                        <div className='flex flex-row items-center'>
                            <FaCheckCircle className='text-[#6756a8] mr-3'/>
                            <p>1 Meetups/Workshops Publishing</p>
                        </div>    
                    </div>
                    <Divider className='w-full m-auto h-0.5 mt-7'/>  
                </CardBody>             
                <CardFooter className='mx-5 flex items-center justify-between max-w-[310px] mt-2'>
                    <div className='flex items-center'>
                        <p className="text-xl uppercase font-bold text-[#6756a8] whitespace-pre">LKR 0 </p>
                        <p className='text-grey1 text-sm'>/ month</p>
                    </div>
                    <Button as={Link} className='bg-[#eae6f6] text-[#6756a8] font-semibold' href="#" variant="flat">
                        Start Now
                    </Button>
                </CardFooter>
            </Card>
            <Card className="min-w-[350px] py-5">
                <CardHeader className="pb-0 px-8">
                    <Chip style={{ color: '#6756a8', fontWeight: 'bold', background:'#fff', borderColor: '#6756a8', borderWidth: '2px' }}>Professional</Chip>                  
                </CardHeader>
                <CardBody className='mx-5 pt-5 max-w-[310px]'>
                    <p className="text-xl uppercase font-bold mb-7">Professional Employer</p> 
                    <Divider className='w-full m-auto'/>
                    <div className='flex flex-col mt-7'>
                        <div className='flex flex-row items-center mb-3'>
                            <FaCheckCircle className='text-[#6756a8] mr-3'/>
                            <p>Post 3 Jobs</p>
                        </div>
                        <div className='flex flex-row items-center mb-3'>
                            <FaCheckCircle className='text-[#6756a8] mr-3'/>
                            <p>10 days Resume visibility</p>
                        </div>
                        <div className='flex flex-row items-center mb-3'>
                            <FaCheckCircle className='text-[#6756a8] mr-3'/>
                            <p>24/7 Critical support</p>
                        </div>  
                        <div className='flex flex-row items-center'>
                            <FaCheckCircle className='text-[#6756a8] mr-3'/>
                            <p>3 Meetups/Workshops Publishing</p>
                        </div>    
                    </div>
                    <Divider className='w-full m-auto h-0.5 mt-7'/>  
                </CardBody>             
                <CardFooter className='mx-5 flex items-center justify-between max-w-[310px] mt-2'>
                    <div className='flex items-center'>
                        <p className="text-xl uppercase font-bold text-[#6756a8] whitespace-pre">LKR 3,000 </p>
                        <p className='text-grey1 text-sm'>/ month</p>
                    </div>
                    <Button as={Link} className='bg-[#eae6f6] text-[#6756a8] font-semibold' href="#" variant="flat">
                        Start Now
                    </Button>
                </CardFooter>
            </Card>
            <Card className="min-w-[350px] py-5">
                <CardHeader className="pb-0 px-8">
                    <Chip style={{ color: '#6756a8', fontWeight: 'bold', background:'#fff', borderColor: '#6756a8', borderWidth: '2px' }}>Enterprise</Chip>                  
                </CardHeader>
                <CardBody className='mx-5 pt-5 max-w-[310px]'>
                    <p className="text-xl uppercase font-bold mb-7">Enterprise Talent</p> 
                    <Divider className='w-full m-auto'/>
                    <div className='flex flex-col mt-7'>
                        <div className='flex flex-row items-center mb-3'>
                            <FaCheckCircle className='text-[#6756a8] mr-3'/>
                            <p>Post 3 Jobs</p>
                        </div>
                        <div className='flex flex-row items-center mb-3'>
                            <FaCheckCircle className='text-[#6756a8] mr-3'/>
                            <p>10 days Resume visibility</p>
                        </div>
                        <div className='flex flex-row items-center mb-3'>
                            <FaCheckCircle className='text-[#6756a8] mr-3'/>
                            <p>24/7 Critical support</p>
                        </div>  
                        <div className='flex flex-row items-center'>
                            <FaCheckCircle className='text-[#6756a8] mr-3'/>
                            <p>3 Meetups/Workshops Publishing</p>
                        </div>    
                    </div>
                    <Divider className='w-full m-auto h-0.5 mt-7'/>  
                </CardBody>             
                <CardFooter className='mx-5 flex items-center justify-between max-w-[310px] mt-2'>
                    <div className='flex items-center'>
                        <p className="text-xl uppercase font-bold text-[#6756a8] whitespace-pre">LKR 10,000 </p>
                        <p className='text-grey1 text-sm'>/ month</p>
                    </div>
                    <Button as={Link} className='bg-[#eae6f6] text-[#6756a8] font-semibold' href="#" variant="flat">
                        Start Now
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}

export default SubPlans