import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import './Dropdown.css';
import { Routes } from "react-router";
import { Container } from "reactstrap";
import { Nav,Col,Row } from 'react-bootstrap';
import ReactDOM from "react-dom";
// import Navbar from 'react-bootstrap/Navbar';
import logo from '../media/Logo.png';
import SocialFollow from "../SocialFollow";
import Home from "../pages/Home";
import Timer from "../pages/PostVoid";
import { MDBModalFooter, MDBModalHeader } from 'mdbreact';
import LinkHelper from './LinkHelper';

// import logo from './media/Logo.png';




function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
    
      <nav className='navbar fixed-top ' >
        
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img alt="logo"
             src={logo}        
             width="30"
             height="30"
            />
          Light Shift
          {/* <i class='fab fa-firstdraft' /> */}
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/shop'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Merch <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/postvoid'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              HateWeek
            </Link>
          </li>
          
          <li>
            <Link
              to='/forum'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Forum
            </Link>
          </li>
          
        </ul>
        <Button />
      </nav>
    
    </>
  );
}

export default Navbar;


// <Navbar.Brand href="#home">
// <img 
//  alt=""
//  src={logo}        
//  width="30"
//  height="30"
//  className="d-inline-block align-top"
// />{' '}
// Light Shift
// </Navbar.Brand>