import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Tooltip, Chip} from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

const UserTable = () => {
    return (
        <div className="flex flex-col gap-3 my-16">
            <div className='flex justify-between'>
                <h1 className='font-bold text-xl pb-3'>Registered Users</h1>  
                <Pagination color='secondary' total={10} initialPage={1} />
            </div>            
            <Table>
                <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>LOCATION</TableColumn>
                <TableColumn>STATUS</TableColumn>
                <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                <TableRow key="1">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell><Chip color="warning" size='sm' variant="flat">Pending</Chip></TableCell>
                    <TableCell>
                        <div className="relative flex items-center gap-2">
                            <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
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
                <TableRow key="2">
                    <TableCell>Zoey Lang</TableCell>
                    <TableCell>Technical Lead</TableCell>
                    <TableCell><Chip color="success" size='sm' variant="flat">Accepted</Chip></TableCell>
                    <TableCell>
                        <div className="relative flex items-center gap-2">
                            <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
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
                <TableRow key="3">
                    <TableCell>Jane Fisher</TableCell>
                    <TableCell>Senior Developer</TableCell>
                    <TableCell><Chip color="warning" size='sm' variant="flat">Pending</Chip></TableCell>
                    <TableCell>
                        <div className="relative flex items-center gap-2">
                            <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
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
                <TableRow key="4">
                    <TableCell>William Howard</TableCell>
                    <TableCell>Community Manager</TableCell>
                    <TableCell><Chip color="danger" size='sm' variant="flat">Rejected</Chip></TableCell>
                    <TableCell>
                        <div className="relative flex items-center gap-2">
                            <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
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
                <TableRow key="5">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell><Chip color="warning" size='sm' variant="flat">Pending</Chip></TableCell>
                    <TableCell>
                        <div className="relative flex items-center gap-2">
                            <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
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
                <TableRow key="6">
                    <TableCell>Zoey Lang</TableCell>
                    <TableCell>Technical Lead</TableCell>
                    <TableCell><Chip color="warning" size='sm' variant="flat">Pending</Chip></TableCell>
                    <TableCell>
                        <div className="relative flex items-center gap-2">
                            <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
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
                </TableBody>
            </Table>
        </div>
      )
    }

export default UserTable