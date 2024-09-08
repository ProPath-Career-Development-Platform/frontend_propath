import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { MdNotificationsNone } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

const NavbarAdmin = () => {
  return (
    <Navbar position="static" className='pt-2 px-2 justify-between' style={{ width: '100%', margin: '0', background: 'none' }}>
      <NavbarBrand className='flex flex-col items-start justify-start'>
        <h1 className='text-xl font-bold'>Hello, Admin</h1>
        <p className='text-sm text-[#969595]'>Welcome back, nice to see you again !</p>
      </NavbarBrand>
      <NavbarContent>
        <p className='text-transparent'>dddddddddddddddddddddddddddddddddd</p>
        <p className='text-transparent'>dddddddddddddddddddddddddddddd</p>
      </NavbarContent>
      <NavbarContent as="div" className="items-center gap-6 float-right pl-40" justify="end">
        <MdNotificationsNone className='text-2xl text-[#814dde]'/>
        <LuSettings className='text-2xl text-[#814dde]'/>
        <FaRegUser isBordered className='text-xl text-[#814dde]'/>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarAdmin;
