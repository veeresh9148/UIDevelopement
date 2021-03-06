import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import '../routes.css'
import logo from './caritor.jpg';

export default function Navbar() {
  return (
    <div>
      <div class="header">
      {/* <img src="caritor.jpg" width="40px" height="40px" alt="" align="left"/> */}
      <img src={logo} width="60px" height="40px" alt="" align="left"/> 
      <Link to="/AdminHomePage" id="nav" className='logo'>Service Request Management</Link>
        <div class="header-right">
          <Link to="/AdminHomePage" id="nav"> Home</Link>
          <Link to="/AdminRequestList" id="nav"> Request List</Link>
          <Link to="/" id="nav"> Logout</Link>
        </div>
      </div>
    </div>
  )
}