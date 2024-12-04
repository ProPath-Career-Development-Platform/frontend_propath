import React, { useEffect, useState } from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, useDisclosure} from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { getToken } from '../../pages/Auth/Auth';

const CompanyTable = () => {
  const rowsPerPage = 10; 
  const [currentPage, setCurrentPage] = useState(1);
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
        const approvedCompanies = data.filter(company => company.status === 'active');
        console.log(approvedCompanies);
        setCompanies(approvedCompanies);
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
          <TableColumn>COMPANY ID</TableColumn>
          <TableColumn>COMPANY NAME</TableColumn>
          <TableColumn>INDUSTRY</TableColumn>
          <TableColumn>CONTACT NO</TableColumn>
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
              <TableCell>{`+94 ${company.contactNumber}`}</TableCell>
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

 
      <Modal size='4xl' className='p-8' placement='auto' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent style={{ marginLeft: '18rem' }}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-purple1 text-2xl">Company Details</ModalHeader>
              <ModalBody className='flex flex-row'>
                <div className='w-1/2'>
                    {selectedCompany && (
                    <>
                        <p className='mb-4'><span className='text-purple2 font-medium'>Company Name:<br/></span> {selectedCompany.companyName}</p>
                        <p className='mb-4'><span className='text-purple2 font-medium'>Industry:<br/></span> {selectedCompany.industryType}</p>
                        <p className='mb-4'><span className='text-purple2 font-medium'>Contact No:<br/></span> {`+94 ${selectedCompany.contactNumber}`}</p>
                        <p className='mb-4'><span className='text-purple2 font-medium'>Address:<br/></span> {selectedCompany.location}</p>
                        <p className='mb-4'><span className='text-purple2 font-medium'>Email:<br/></span> {selectedCompany.email}</p>
                        <p className='mb-3'><span className='text-purple2 font-medium'>Website:<br/></span> <a className='text-blue-600' href={selectedCompany.companyWebsite} target="_blank" rel="noopener noreferrer">Click Here</a></p>
                    </>
                    )}
                </div>
                <div className='w-1/2 flex flex-col'>
                      {selectedCompany && (
                        <>
                          <p><span className='text-purple2 font-medium text-sm'>Company Logo:<br /></span>
                            <img src={selectedCompany.logoImg} alt="Company Logo" style={{ height: '150px', width: 'auto' }} />
                          </p>
                          <p className='mb-3'>
                            <span className='text-purple2 font-medium text-sm'>Company Banner:<br /></span>
                            <img src={selectedCompany.bannerImg} alt="Company Banner" style={{ height: '250px', width: 'auto' }} />
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
  );
}

export default CompanyTable;
