import React from 'react';
import './TopNavBar.css';

const TopNavBar = () => {
  return (
    <nav className='topnavbar'>
      <ul>
        <li className='active'><a href='#'>Home</a></li>
        <li><a href="#">Find Job</a></li>
        <li><a href="#">Find Employees</a></li>
        <li><a href="/jobseeker/home">Dashboard</a></li>
        <li><a href="/jobseeker/job-alert">Job Alerts</a></li>
        <li><a href="#">Customer Support</a></li>
      </ul>
    </nav>
  )
}

export default TopNavBar