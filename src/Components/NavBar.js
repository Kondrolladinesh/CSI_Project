import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './NavBar.css';
import companyLogo from '../Images/CompanyLogo1.png'

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-header">
        <a href="/home" className="nav-logo">
          <img src={companyLogo} alt='company-logo'/>
        </a>
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={handleMenuClick}>
          <FaBars />
        </div>
      </div>
      <div className='nav-item-list'>
        <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
                <a href="/home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
                <a href="/viewblog" className="nav-link">View Blogs</a>
            </li>
            {/* <li className="nav-item">
                <a href="/contact" className="nav-link">Contact</a>
            </li> */}
            <li className="nav-item">
                <a href="/" className="nav-link" style={{color:'red'}} onClick={()=>localStorage.setItem("authToken",'')}>Logout</a>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

