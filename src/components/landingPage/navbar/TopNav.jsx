import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <nav className='topnav'>
      <ul>
        <li className='active'><Link to='/'>Jobs</Link></li>
        <li><Link to='/workshops'>Workshops</Link></li>
        <li><Link to='/professionalmemberships'>Professional Memberships</Link></li>
        <li><a href="#">Continuous Professional Development</a></li>
      </ul>
    </nav>
  )
}

export default TopNav
