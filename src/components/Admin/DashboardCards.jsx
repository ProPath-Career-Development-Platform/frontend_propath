import React from 'react'
import {Card, CardBody} from "@nextui-org/react";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";


const DashboardCards = () => {
  return (
    <div className='flex flex-row justify-between px-2 mx-6 py-6'>
        <Card className="w-[280px] h-28">
            <CardBody className="flex flex-row gap-3 my-1 mx-1">
                <div className='bg-[#efe8fc] flex items-center px-3 rounded-lg'>
                    <GiReceiveMoney className='text-5xl text-[#814dde]'/>
                </div>
                
                <div className="flex flex-col justify-center">
                <p className="text-2xl font-bold">35,000</p>
                <p className="text-small text-default-500">Subscription Revenue</p>
                </div>
            </CardBody>
        </Card>

        <Card className="w-[280px] h-28">
            <CardBody className="flex flex-row gap-3 my-1 mx-1">
                <div className='bg-[#efe8fc] flex items-center px-3 rounded-lg'>
                    <MdOutlinePendingActions className='text-5xl text-[#814dde]'/>
                </div>
                
                <div className="flex flex-col justify-center">
                <p className="text-2xl font-bold">3</p>
                <p className="text-small text-default-500">Pending Approvals</p>
                </div>
            </CardBody>
        </Card>

        <Card className="w-[280px] h-28">
            <CardBody className="flex flex-row gap-3 my-1 mx-1">
                <div className='bg-[#efe8fc] flex items-center px-3 rounded-lg'>
                    <PiBuildingOfficeFill className='text-5xl text-[#814dde]'/>
                </div>
                
                <div className="flex flex-col justify-center">
                <p className="text-2xl font-bold">14</p>
                <p className="text-small text-default-500">Total Companies</p>
                </div>
            </CardBody>
        </Card>

        <Card className="w-[280px] h-28">
            <CardBody className="flex flex-row gap-3 my-1 mx-1">
                <div className='bg-[#efe8fc] flex items-center px-3 rounded-lg'>
                    <FaUsers className='text-5xl text-[#814dde]'/>
                </div>
                
                <div className="flex flex-col justify-center">
                <p className="text-2xl font-bold">31</p>
                <p className="text-small text-default-500">Total Registered Users</p>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default DashboardCards