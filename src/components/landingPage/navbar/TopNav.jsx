import React from 'react'
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function TopNav() {
  const location = useLocation();
  
  return (
    <nav className='topnav'>
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}><Link to='/'>Jobs</Link></li>
        <li className={location.pathname === '/workshops' ? 'active' : ''}><Link to='/workshops'>Workshops</Link></li>
        <li className={location.pathname === '/professionalmemberships' ? 'active' : ''}><Link to='/professionalmemberships'>Professional Memberships</Link></li>
        <li className={location.pathname === '/cpdcourses' ? 'active' : ''}><Link to='/cpdcourses'>Continuous Professional Development</Link></li>
      </ul>
    </nav>
  )
}

export default TopNav
