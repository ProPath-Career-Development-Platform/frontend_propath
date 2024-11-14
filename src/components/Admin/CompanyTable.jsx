import React, { useEffect, useState } from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { getToken } from '../../pages/Auth/Auth';

const CompanyTable = () => {
  const { isOpen, onOpenChange } = useDisclosure();
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null); 


  useEffect(() => {
    const token = getToken();
    console.log(token);

    fetch('http://localhost:8080/admin/RegisterdCompanies', {
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
        setCompanies(data);
      })
      .catch(error => {
        console.log('Error fetching companies:', error);
      });
  }, []);

  
  const handleOpen = (company) => {
    setSelectedCompany(company);  
    onOpenChange(true); 
  };

  return (
    <div className="flex flex-col gap-3 my-16">
      <div className='flex justify-between'>
        <h1 className='font-bold text-xl pb-3'>Registered Companies</h1>
        <Pagination color='secondary' total={10} initialPage={1} />
      </div>
      <Table>
        <TableHeader>
          <TableColumn>COMPANY ID</TableColumn>
          <TableColumn>COMPANY NAME</TableColumn>
          <TableColumn>INDUSTRY</TableColumn>
          <TableColumn>BUSINESS REG NO</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>WEBSITE</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{`ppc${String(company.id).padStart(4, '0')}`}</TableCell>
              <TableCell>{company.companyName}</TableCell>
              <TableCell>{company.industryType}</TableCell>
              <TableCell>{company.regNo}</TableCell>
              <TableCell>{company.email}</TableCell>
              <TableCell className='text-blue-600'>
                <a href={company.companyWebsite} target="_blank" rel="noopener noreferrer">Click here</a>
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Details">
                    <span
                      className="text-lg text-default-400 cursor-pointer active:opacity-50"
                      onClick={() => handleOpen(company)} 
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

 
      <Modal size='4xl' placement='auto' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent style={{ marginLeft: '18rem' }}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-purple1 text-2xl">Company Details</ModalHeader>
              <ModalBody className='flex flex-row'>
                <div className='w-1/2'>
                    {selectedCompany && (
                    <>
                        <p className='mb-3'><span className='text-purple2 font-medium'>Company Name:<br/></span> {selectedCompany.companyName}</p>
                        <p className='mb-3'><span className='text-purple2 font-medium'>Industry:<br/></span> {selectedCompany.industryType}</p>
                        <p className='mb-3'><span className='text-purple2 font-medium'>Business Reg No:<br/></span> {selectedCompany.regNo}</p>
                        <p className='mb-3'><span className='text-purple2 font-medium'>Email:<br/></span> {selectedCompany.email}</p>
                        <p className='mb-3'><span className='text-purple2 font-medium'>Website:<br/></span> <a className='text-blue-600' href={selectedCompany.companyWebsite} target="_blank" rel="noopener noreferrer">Click Here</a></p>
                    </>
                    )}
                </div>
                <div className='w-1/2'>
                    {selectedCompany && (
                    <>
                        <p className='mb-3'><span className='text-purple2 font-medium'>Company Logo:<br/></span> {selectedCompany.companyName}</p>
                        <p className='mb-3'><span className='text-purple2 font-medium'>Business Registration:<br/></span> {selectedCompany.industryType}</p>
                    </>
                    )}
                </div>                
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default CompanyTable;
