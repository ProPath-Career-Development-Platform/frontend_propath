import React from 'react'
import {Card, CardHeader, CardBody, Image, CardFooter, Link} from "@nextui-org/react";
import beforeapply1 from '/before-apply1.png'
import beforeapply2 from '/before-apply2.png'
import beforeapply3 from '/before-apply3.png'

const BeforeApply = () => {
  return (
    <div className='bg-[#f4f4f4] px-12 pt-20 pb-10'>
        <p className='text-purple4 font-bold text-4xl flex justify-center mb-24'>Get the full picture before you apply</p>
        <div className='flex gap-16 my-16 justify-center '>
            <Card className="pb-10 w-80">
                <CardBody className="overflow-visible items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={beforeapply1}
                    width={270}
                    />
                </CardBody>
                <CardHeader className="pb-0 px-8 flex-col text-center">
                    <p className="text-lg uppercase font-bold">Culture and values</p>
                    <small className="text-default-500">Find out about the company culture</small>                    
                </CardHeader>
            </Card>           
            <Card className="pb-10 w-80">
                <CardBody className="overflow-visible items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={beforeapply2}
                    width={270}
                    />
                </CardBody>
                <CardHeader className="pb-0 px-8 flex-col text-center">
                    <p className="text-lg uppercase font-bold">Ratings and reviews</p>
                    <small className="text-default-500">Read reviews from employees</small>                   
                </CardHeader>
            </Card> 
            <Card className="pb-10 w-80">
                <CardBody className="overflow-visible items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={beforeapply3}
                    width={270}
                    />
                </CardBody>
                <CardHeader className="pb-0 px-8 flex-col text-center">
                    <p className="text-lg uppercase font-bold">Perks and benefits</p>
                    <small className="text-default-500">Find perks that matter to you</small>                   
                </CardHeader>
            </Card> 
        </div>
    </div>
  )
}

export default BeforeApply