import React, { useEffect, useState } from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Tooltip, Input, useDisclosure} from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { getToken } from '../../pages/Auth/Auth';

const JobsTable = () => {
  const rowsPerPage = 10; 
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState([]); 

  useEffect(() => {
    const token = getToken();
    console.log(token);

    fetch('http://localhost:8080/admin/PostedJobs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setJobs(data);
      })
      .catch(error => {
        console.log('Error fetching jobs:', error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-3 my-16">
      <div className='flex justify-between'>
        <h1 className='font-bold text-xl pb-3'>Jobs Posted by Companies</h1>
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
          total={Math.ceil(jobseekers.length / rowsPerPage)} 
          initialPage={currentPage} 
          onChange={page => setCurrentPage(page)}
        /> */}
      </div>
      <Table>
        <TableHeader>
          <TableColumn>JOB ID</TableColumn>
          <TableColumn>COMPANY NAME</TableColumn>
          <TableColumn>JOB TITLE</TableColumn>
          <TableColumn>POSTED ON</TableColumn>
          <TableColumn>EXPIRE ON</TableColumn>
          <TableColumn>APPLICANTS</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{`ppj${String(job.id).padStart(4, '0')}`}</TableCell>
              <TableCell>{job.user.name}</TableCell>
              <TableCell>{job.jobTitle}</TableCell>
              <TableCell>{job.postedIn}</TableCell>
              <TableCell>{job.expiryDate}</TableCell>
              <TableCell className='text-blue-600'>
                <a>Click here</a>
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Details">
                    <span
                      className="text-lg text-default-400 cursor-pointer active:opacity-50"
                      onClick={() => handleOpen(job)} 
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

export default JobsTable