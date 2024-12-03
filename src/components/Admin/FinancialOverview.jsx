import React from 'react'
import {Button, Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const FinancialOverview = () => {
  return (
    <Card>
        <CardBody className='px-8 py-6 gap-3'>
            <h1 className='text-xl font-bold'>Financial Overview</h1>
            <Card className='p-4'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold text-purple-700'>Total Subscription Revenue</h2>
                    <Button className='bg-purple-700 text-white font-bold'>Transfer</Button>
                </div>
                <p className='mt-2 font-bold text-2xl'>LKR. 370,000.00</p>
            </Card>
            <Card className='p-4'>
                <h2 className='font-bold text-purple-700 mb-3'>Subscription Plans Summary</h2>
                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>PLAN</TableColumn>
                        <TableColumn>COUNT</TableColumn>
                        <TableColumn>TOTAL</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                        <TableCell>BASIC</TableCell>
                        <TableCell>58</TableCell>
                        <TableCell>LKR. 0.00</TableCell>
                        </TableRow>
                        <TableRow key="2">
                        <TableCell>STANDARD</TableCell>
                        <TableCell>32</TableCell>
                        <TableCell>LKR. 160,000.00</TableCell>
                        </TableRow>
                        <TableRow key="3">
                        <TableCell>PREMIUM</TableCell>
                        <TableCell>21</TableCell>
                        <TableCell>LKR. 210,000.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </CardBody>
    </Card>
  )
}

export default FinancialOverview