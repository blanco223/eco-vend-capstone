import React from 'react';

const Navbar = ({ setPage, currentPage }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="#" onClick={() => setPage('home')} className={currentPage === 'home' ? 'active' : ''}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setPage('aboutus')} className={currentPage === 'aboutus' ? 'active' : ''}>
            About Us
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setPage('components')} className={currentPage === 'components' ? 'active' : ''}>
            Components
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setPage('features')} className={currentPage === 'features' ? 'active' : ''}>
            Features
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
