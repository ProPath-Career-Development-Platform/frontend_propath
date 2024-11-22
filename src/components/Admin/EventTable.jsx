import React, { useEffect, useState } from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, useDisclosure} from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { getToken } from '../../pages/Auth/Auth'; 

const EventTable = () => {
    const rowsPerPage = 10; 
    const [currentPage, setCurrentPage] = useState(1);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const token = getToken();
        console.log(token);
    
        fetch('http://localhost:8080/admin/Events', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch events');
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
            setEvents(data);
          })
          .catch(error => {
            console.log('Error fetching events:', error);
          });
      }, []);

  return (
    <div className="flex flex-col gap-3 my-16">
      <div className='flex justify-between'>
        <h1 className='font-bold text-xl pb-3'>Workshops/Events Posted by Companies</h1>
        <Input
          classNames={{
              base: "max-w-full sm:max-w-[20rem] h-9",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<IoMdSearch size={20} />}
          type="search"
        />
        <Pagination total={5} color='secondary' initialPage={1} />
        {/* <Pagination 
          color='secondary' 
          total={Math.ceil(companies.length / rowsPerPage)} 
          initialPage={currentPage} 
          onChange={page => setCurrentPage(page)}
        /> */}
      </div>
      <Table>
        <TableHeader>
          <TableColumn>EVENT ID</TableColumn>
          <TableColumn>COMPANY NAME</TableColumn>
          <TableColumn>TITLE</TableColumn>
          <TableColumn>DATE</TableColumn>
          <TableColumn>LOCATION</TableColumn>
          <TableColumn>MAX USER COUNT</TableColumn>
          <TableColumn>REG USER COUNT</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{`ppe${String(event.id).padStart(4, '0')}`}</TableCell>
              <TableCell>{event.user.username}</TableCell>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.location}</TableCell>             
              <TableCell>{event.maxParticipant}</TableCell>
              <TableCell>{event.currentParticipants}</TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Details">
                    <span
                      className="text-lg text-default-400 cursor-pointer active:opacity-50"
                      onClick={() => handleOpen(event)} 
                    >
                      <FaRegEye />
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Reject Company">
                    <span className="text-2xl text-danger cursor-pointer active:opacity-50">
                      <MdDeleteOutline />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  )
}

export default EventTable