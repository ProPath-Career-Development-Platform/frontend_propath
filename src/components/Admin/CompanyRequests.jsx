import React, { useEffect, useState } from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody, Button, Tooltip, Chip, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, Pagination} from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { getToken } from '../../pages/Auth/Auth';

const CompanyRequests = () => {
    const rowsPerPage = 7; 
  const [currentPage, setCurrentPage] = useState(1);
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
            console.log('Response body:', data); 
            setRequests(data);
          })
          .catch(error => {
            console.log('Error fetching companies:', error);
          });
      }, []);
    
      
    const handleApprove = (id) => {
        const token = getToken();

        fetch(`http://localhost:8080/admin/companyRequests/${id}/approve`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Failed to approve company');
            }
            return response.json();
            })
            .then(() => {
            setRequests(prevRequests =>
                prevRequests.map(request =>
                request.id === id ? { ...request, status: 'approved' } : request
                )
            );
            })
            .catch(error => {
            console.error('Error approving company:', error);
            });
    };

    
      const handleOpen = (request) => {
    setSelectedRequest(request);  
    onOpenChange(true); 
    };
  

  return (
    <Card>
        <CardBody className='px-4 pt-6' style={{height: '450px'}}>
            <div className="flex flex-col gap-5">
                <div className='flex justify-between'>
                    <h1 className='font-bold text-xl pl-4 pb-3'>New Company Requests</h1>  
                    <Pagination total={3} color='secondary' initialPage={1} />
                    {/* <Pagination 
                        color='secondary' 
                        total={Math.ceil(requests.length / rowsPerPage)} 
                        initialPage={currentPage} 
                        onChange={page => setCurrentPage(page)}
                    />     */}
                </div>        
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
                            <TableCell>
                                <Chip
                                    color={
                                    request.status === "approved"
                                        ? "success"
                                        : request.status === "rejected"
                                        ? "danger"
                                        : "warning"
                                    }
                                    variant="flat"
                                >
                                    {request.status}
                                </Chip>
                            </TableCell>
                            <TableCell>
                                <div className="relative flex items-center gap-2">
                                <Tooltip content="Details">
                                    <span
                                    className="text-lg text-default-400 cursor-pointer active:opacity-50"
                                    onClick={() => handleOpen(request.id)} 
                                    >
                                    <FaRegEye />
                                    </span>
                                </Tooltip>
                                <Tooltip color="success" content="Accept Company">
                                    <span 
                                    className="text-lg text-success cursor-pointer active:opacity-50"
                                    onClick={() => handleApprove(request.id)}>
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
                                    <p className='mb-3'><span className='text-purple2 font-medium text-sm'>Company Name:<br/></span> {selectedRequest.companyName}</p>
                                    <p className='mb-3'><span className='text-purple2 font-medium text-sm'>Industry:<br/></span> {selectedRequest.industryType}</p>
                                    <p className='mb-3'><span className='text-purple2 font-medium text-sm'>Company Location:<br/></span> {selectedRequest.location}</p>
                                    <p className='mb-3'><span className='text-purple2 font-medium text-sm'>Contact Number:<br/></span> {selectedRequest.contactNumber}</p>
                                    <p className='mb-3'><span className='text-purple2 font-medium text-sm'>Email:<br/></span> {selectedRequest.email}</p>
                                    <p className='mb-3'><span className='text-purple2 font-medium text-sm'>Website:<br/></span> <a className='text-blue-600' href={selectedRequest.companyWebsite} target="_blank" rel="noopener noreferrer">Click Here</a></p>
                                    <p><span className='text-purple2 font-medium text-sm'>Company Logo:<br/></span>
                                        <img src={selectedRequest.logoImg} alt="Company Logo" style={{ height: '150px', width: 'auto' }} />
                                    </p>
                                </>
                                )}
                            </div>
                            <div className='w-1/2'>
                                {selectedRequest && (
                                <>                       
                                    <p className='mb-3'><span className='text-purple2 font-medium text-sm'>Business Registration:<br/></span>
                                        <img src={selectedRequest.bannerImg} alt="Company Logo" style={{ height: '500px', width: 'auto' }} />
                                    </p>
                                </>
                                )}
                            </div>                
                        </ModalBody>
                        </>
                    )}
                    </ModalContent>
                </Modal>
            </div>
        </CardBody>
    </Card>
  )
}

export default CompanyRequests