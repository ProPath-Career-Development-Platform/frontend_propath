import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody, Button, Tooltip, Chip} from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const CompanyRequests = () => {

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
                                <Tooltip color='success' className='text-white' content="Accept Company">
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
                                <Tooltip color='success' className='text-white' content="Accept Company">
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
                                <Tooltip color='success' className='text-white' content="Accept Company">
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
                                <Tooltip color='success' className='text-white' content="Accept Company">
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
                                <Tooltip color='success' className='text-white' content="Accept Company">
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
                                <Tooltip color='success' className='text-white' content="Accept Company">
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
                    </TableBody>
                </Table>
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