import React from 'react'
import './Navbar.css';

function TopNav() {
  return (
    <nav className='topnav'>
      <ul>
        <li className='active'><a href='#'>Jobs</a></li>
        <li><a href="#">Workshops</a></li>
        <li><a href="#">Professional Memberships</a></li>
        <li><a href="#">Continuous Professional Development</a></li>
      </ul>
    </nav>
  )
}

export default TopNav
