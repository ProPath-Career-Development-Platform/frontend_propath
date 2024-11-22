import React from 'react';
import logo from '../../../assets/logo.png';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { Divider } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#ebebf7]'>
        <footer class="py-12 px-10 flex flex-row">
            <div className='flex flex-col w-1/4'>
                <img className='w-44 mb-2' src={logo} alt="Logo" />           
                <p className='text-lg font-semibold text-purple1 mb-10'>Where Talent Meets Opportunity</p>
                <div className='flex md:flex-row mb-3'>
                    <FaLocationDot className="h-5 w-5" style={{ color: '#73726e' }}/>
                    <div className='text-[#73726e] ml-4'>
                        <p>No. 17, Dutugemunu Road,</p>
                        <p>Colombo 08.</p>
                    </div>
                </div>
                <div className='flex md:flex-row mb-3'>
                    <FaPhoneAlt className="h-5 w-5" style={{ color: '#73726e' }}/>
                    <div className='text-[#73726e] ml-4'>
                        <p>+94 11 2459 789</p>
                        <p>+94 77 7458 789</p>
                    </div>
                </div>
                <div className='flex md:flex-row mb-3'>
                    <MdEmail className="h-5 w-5" style={{ color: '#73726e' }}/>
                    <div className='text-[#73726e] ml-4'>
                        <p>propath@gmail.com</p>
                    </div>
                </div>
                <div className='flex md:flex-row gap-4 mt-8'>
                    <a class="link link-hover"><FaFacebook className="h-8 w-8" style={{ color: '#73726e' }}/></a>
                    <a class="link link-hover"><FaInstagramSquare className="h-8 w-8" style={{ color: '#73726e' }}/></a>
                    <a class="link link-hover"><IoLogoLinkedin className="h-8 w-8" style={{ color: '#73726e' }}/></a>
                </div>
            </div> 
            <div className='flex flex-row w-3/4 gap-4'>
              <div className='w-1/4'>
                <p className='text-lg font-semibold text-purple1 mb-6'>Jobs</p>
                <ul>
                  <Link><li className='text-[#73726e] mb-3'>Job Search</li></Link>
                  <Link><li className='text-[#73726e] mb-3'>Career Advice</li></Link>
                  <Link><li className='text-[#73726e] mb-3'>Explore Companies</li></Link>
                  <Link><li className='text-[#73726e] mb-3'>Employer Site</li></Link>
                </ul>
              </div>
              <div className='w-1/4'>
                <p className='text-lg font-semibold text-purple1 mb-6'>Workshops</p>
                <ul>
                  <Link><li className='text-[#73726e] mb-3'>Job Search</li></Link>
                  <Link><li className='text-[#73726e] mb-3'>Career Advice</li></Link>
                  <Link><li className='text-[#73726e] mb-3'>Explore Companies</li></Link>
                  <Link><li className='text-[#73726e] mb-3'>Employer Site</li></Link>
                </ul>
              </div>
              <div className='w-1/4'>
                <p className='text-lg font-semibold text-purple1 mb-6'>Professional Memberships</p>
                <ul>
                  <Link><li className='text-[#73726e] mb-3'>Job Search</li></Link>
                  <Link><li className='text-[#73726e] mb-3'>Career Advice</li></Link>
                  <Link><li className='text-[#73726e] mb-3'>Explore Companies</li></Link>
                  <Link><li className='text-[#73726e] mb-3'>Employer Site</li></Link>
                </ul>
              </div>
              <div className='w-1/4'>
                <p className='text-lg font-semibold text-purple1 mb-6'>CPD Courses</p>
                <ul>
                  <Link><li className='text-[#73726e] mb-3'>Job Search</li></Link>
                  <Link><li className='text-[#73726e] mb-3'>Career Advice</li></Link>
                  <Link><li className='text-[#73726e] mb-3'>Explore Companies</li></Link>
                  <Link><li className='text-[#73726e] mb-3'>Employer Site</li></Link>
                </ul>
              </div>
            </div>
        </footer>
        <Divider/>
        <footer class="py-4 px-24 flex flex-row justify-between">
            <aside>
                <p>Copyright © 2024 - All right reserved.</p>
            </aside>
            <div className='float-right flex gap-12'>
              <p>Terms & Conditions</p>
              <p>Security & Policy</p>

            </div>
        </footer>
    </div>
  )
}

export default Footer