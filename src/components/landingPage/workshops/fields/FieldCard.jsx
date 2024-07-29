import React from 'react'
import {Card, CardBody, Link} from "@nextui-org/react";

const FieldCard = () => {
  return (
    <Card className='min-w-56 max-w-56 max-h-16 min-h-20'>
      <CardBody className='text-center justify-center items-center'>
        <Link href='#' className='text-purple2'>Information Technology</Link>
      </CardBody>
    </Card>
  )
}

export default FieldCard