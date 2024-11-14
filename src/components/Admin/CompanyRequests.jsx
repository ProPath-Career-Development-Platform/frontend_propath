import React, { useEffect, useState } from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody, Button, Tooltip, Chip, useDisclosure} from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { getToken } from '../../pages/Auth/Auth';

const CompanyRequests = () => {
    const { isOpen, onOpenChange } = useDisclosure();
    const [requests, setRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null); 

    useEffect(() => {
        const token = getToken();
        console.log(token);
    
        fetch('http://localhost:8080/admin/companyRequests', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch companies');
            }
            return response.json();
          })
          .then(data => {
            setRequests(data);
          })
          .catch(error => {
            console.log('Error fetching companies:', error);
          });
      }, []);
    
      
      const handleOpen = (request) => {
        setSelectedRequest(request);  
        onOpenChange(true); 
      };



  return (
    <Card>
        <CardBody className='px-4 pt-6 pb-3'>
            <div className="flex flex-col gap-3">
                <h1 className='font-bold text-xl pl-4 pb-3'>New Company Requests</h1>              
                <Table>
                    <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>LOCATION</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                    <TableColumn>ACTIONS</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {requests.map((request, index) => (
                            <TableRow key={index + 1}>
                            <TableCell>{request.companyName}</TableCell>
                            <TableCell>{request.location}</TableCell>
                            <TableCell><Chip color="warning" variant="flat">{request.status}</Chip></TableCell>
                            <TableCell>
                                <div className="relative flex items-center gap-2">
                                <Tooltip content="Details">
                                    <span
                                    className="text-lg text-default-400 cursor-pointer active:opacity-50"
                                    onClick={() => handleOpen(request)} 
                                    >
                                    <FaRegEye />
                                    </span>
                                </Tooltip>
                                <Tooltip color="success" content="Reject Company">
                                    <span className="text-lg text-success cursor-pointer active:opacity-50">
                                    <FaRegCheckCircle />
                                    </span>
                                </Tooltip>
                                <Tooltip color="danger" content="Reject Company">
                                    <span className="text-xl text-danger cursor-pointer active:opacity-50">
                                    <MdOutlineCancel />
                                    </span>
                                </Tooltip>
                                </div>
                            </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Modal size='4xl' placement='auto' isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent style={{ marginLeft: '18rem' }}>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1 text-purple1 text-2xl">Company Details</ModalHeader>
                        <ModalBody className='flex flex-row'>
                            <div className='w-1/2'>
                                {selectedRequest && (
                                <>
                                    <p className='mb-3'><span className='text-purple2 font-medium'>Company Name:<br/></span> {selectedRequest.companyName}</p>
                                    <p className='mb-3'><span className='text-purple2 font-medium'>Industry:<br/></span> {selectedRequest.industryType}</p>
                                    <p className='mb-3'><span className='text-purple2 font-medium'>Business Reg No:<br/></span> {selectedRequest.regNo}</p>
                                    <p className='mb-3'><span className='text-purple2 font-medium'>Email:<br/></span> {selectedRequest.email}</p>
                                    <p className='mb-3'><span className='text-purple2 font-medium'>Website:<br/></span> <a className='text-blue-600' href={selectedRequest.companyWebsite} target="_blank" rel="noopener noreferrer">Click Here</a></p>
                                </>
                                )}
                            </div>
                            <div className='w-1/2'>
                                {selectedRequest && (
                                <>
                                    <p className='mb-3'><span className='text-purple2 font-medium'>Company Logo:<br/></span> {selectedRequest.companyName}</p>
                                    <p className='mb-3'><span className='text-purple2 font-medium'>Business Registration:<br/></span> {selectedRequest.industryType}</p>
                                </>
                                )}
                            </div>                
                        </ModalBody>
                        </>
                    )}
                    </ModalContent>
                </Modal>

                <div className="flex justify-between">
                    <Button
                    size="sm"
                    variant="flat"
                    color="default"
                    onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                    >
                    Previous
                    </Button>
                    <Button
                    size="sm"
                    variant="flat"
                    color="default"
                    onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
                    >
                    Next
                    </Button>
                </div>
            </div>
        </CardBody>
    </Card>
  )
}

export default CompanyRequests