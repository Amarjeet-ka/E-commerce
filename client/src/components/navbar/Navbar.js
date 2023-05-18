import React, { useState } from 'react';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import m from '../assets/multikart.png';


function  NavigationBar() {
  const [showMore, setShowMore] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function handleLinkHover() {
    setShowMore(true);
  }

  function handleLinkLeave() {
    setShowMore(false);
  }

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  const navLinks = [
    {
      label: 'Home',
      path: '/',
      options: [
        { label: 'Submenu Item 1', path: '/submenu1' },
        { label: 'Submenu Item 2', path: '/submenu2' },
        { label: 'Submenu Item 3', path: '/submenu3' },
      ],
    },
    {
      label: 'About',
      path: '/about',
      options: [
        { label: 'Submenu Item 1', path: '/submenu1' },
        { label: 'Submenu Item 2', path: '/submenu2' },
        { label: 'Submenu Item 3', path: '/submenu3' },
      ],
    },
    {
      label: 'Contact',
      path: '/contact',
      options: [
        { label: 'Submenu Item 1', path: '/submenu1' },
        { label: 'Submenu Item 2', path: '/submenu2' },
        { label: 'Submenu Item 3', path: '/submenu3' },
      ],
    },
  ];

  return (
    <nav className="navbar">
      
      <div className="navbar-top">
        
     
 
      <FontAwesomeIcon className="navbar-logo" icon={faBars}   onClick={handleMenuClick} />

        <div className="navbar-logo">
          <img src={m}  alt='pic not found'/>
        </div>
      </div>
      {showMenu && (





      <ul className={`navbar-links ${showMenu ? 'show' : ''}`}>
        {navLinks.map((link) => (
          <li className="navbar-link" key={link.path}>
            <a href={link.path}>{link.label}</a>
            {link.options && (
              <ul className="navbar-more">
                {link.options.map((option) => (
                  <li className="navbar-more-link" key={option.path}>
                    <a href={option.path}>{option.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      )}
      <div className="navbar-links">
        <a href="/service" className="navbar-link" onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Service</a>
        {showMore && (
          <div className="navbar-more">
            <a href="/m1" className="navbar-more-link">More 1</a>
            <a href="/m2" className="navbar-more-link">More 2</a>
            <a href="/m3" className="navbar-more-link">More 3</a>
          </div>
        )}
        <a href="/l1" className="navbar-link">Product</a>
        <a href="/l2" className="navbar-link">Link 3</a>
      </div>
    </nav>
  );
}

export default 

  NavigationBar;
