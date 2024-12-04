import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, useDisclosure} from "@nextui-org/react";

const SubscriptionTable = () => {
  return (
    <div className="flex flex-col gap-3 my-16">
      <div className='flex justify-between'>
        <h1 className='font-bold text-xl pb-3'>Subscribed Plans by Companies</h1>
        <Pagination total={5} color='secondary' initialPage={1} />
      </div>
      <Table>
        <TableHeader>
          <TableColumn>COMPANY ID</TableColumn>
          <TableColumn>COMPANY NAME</TableColumn>
          <TableColumn>PLAN</TableColumn>
          <TableColumn>ACIVATED DATE</TableColumn>
          <TableColumn>AMOUNT</TableColumn>
          <TableColumn>NO OF JOBS</TableColumn>
          <TableColumn>NO OF EVENTS</TableColumn>
        </TableHeader>
        <TableBody>
            <TableRow key='1'>
              <TableCell>ppc0001</TableCell>
              <TableCell>IFS R&D International</TableCell>
              <TableCell className='text-purple-800 font-bold'>PREMIUM</TableCell>
              <TableCell>2024-10-25</TableCell>
              <TableCell>LKR. 10,000.00</TableCell>             
              <TableCell>23</TableCell>
              <TableCell>5</TableCell>
            </TableRow>
            <TableRow key='2'>
              <TableCell>ppc0010</TableCell>
              <TableCell>John Keells Holdings</TableCell>
              <TableCell className='text-purple-600 font-bold'>STANDARD</TableCell>
              <TableCell>2024-10-21</TableCell>
              <TableCell>LKR. 5,000.00</TableCell>             
              <TableCell>8</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow key='3'>
              <TableCell>ppc0002</TableCell>
              <TableCell>WSO2</TableCell>
              <TableCell className='text-purple-800 font-bold'>PREMIUM</TableCell>
              <TableCell>2024-10-17</TableCell>
              <TableCell>LKR. 10,000.00</TableCell>             
              <TableCell>18</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow key='4'>
              <TableCell>ppc0006</TableCell>
              <TableCell>Hatton National Bank</TableCell>
              <TableCell className='text-purple-400 font-bold'>BASIC</TableCell>
              <TableCell>2024-10-12</TableCell>
              <TableCell>LKR. 0.00</TableCell>             
              <TableCell>3</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow key='3'>
              <TableCell>ppc0007</TableCell>
              <TableCell>Hayleys PLC</TableCell>
              <TableCell className='text-purple-800 font-bold'>PREMIUM</TableCell>
              <TableCell>2024-10-05</TableCell>
              <TableCell>LKR. 10,000.00</TableCell>             
              <TableCell>20</TableCell>
              <TableCell>2</TableCell>
            </TableRow>
        </TableBody>
      </Table>

    </div>
  )
}

export default SubscriptionTable