import {React, useState, useEffect } from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Tooltip, Chip, Input} from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";
import { getToken } from '../../pages/Auth/Auth';

const UserTable = () => {
    const rowsPerPage = 10; 
    const [currentPage, setCurrentPage] = useState(1);
    const [users, setUsers] = useState([]);

    // const data = [
    //     { name: 'Tony Reichert', location: 'CEO', status: 'Pending' },
    //     { name: 'Zoey Lang', location: 'Technical Lead', status: 'Accepted' },
    //     { name: 'Jane Fisher', location: 'Senior Developer', status: 'Pending' },
    //     { name: 'William Howard', location: 'Community Manager', status: 'Rejected' },
    //     { name: 'Tony Reichert', location: 'CEO', status: 'Pending' },
    //     { name: 'Zoey Lang', location: 'Technical Lead', status: 'Pending' }
    // ];

    // const startIndex = (currentPage - 1) * rowsPerPage;
    // const currentRows = companies.slice(startIndex, startIndex + rowsPerPage);

    useEffect(() => {
        const token = getToken();
        console.log(token);
    
        fetch('http://localhost:8080/admin/RegisterdUsers', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch users');
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
            setUsers(data);
          })
          .catch(error => {
            console.log('Error fetching users:', error);
          });
    }, []);

    return (
        <div className="flex flex-col gap-3 my-16">
            <div className='flex justify-between'>
                <h1 className='font-bold text-xl pb-3'>Registered Users</h1>  
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
                    total={Math.ceil(users.length / rowsPerPage)} 
                    initialPage={currentPage} 
                    onChange={page => setCurrentPage(page)}
                /> */}
            </div>            
            <Table>
                <TableHeader>
                <TableColumn>USER ID</TableColumn>
                <TableColumn>NAME</TableColumn>
                <TableColumn>LOCATION</TableColumn>
                <TableColumn>PREFERRED CLASSIFICATION</TableColumn>
                <TableColumn>TEL NO</TableColumn>
                <TableColumn>EMAIL</TableColumn>
                <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow key={index + 1}>
                            <TableCell>{`ppu${String(user.id).padStart(4, '0')}`}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.location}</TableCell>
                            <TableCell>{user.preferred_classification}</TableCell>
                            <TableCell>{user.contact_no}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <div className="relative flex items-center gap-2">
                                    <Tooltip content="Edit">
                                    <span className="text-xl text-default-400 cursor-pointer active:opacity-50">
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

export default UserTable