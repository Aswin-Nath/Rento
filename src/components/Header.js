// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className='Logo'>Your Logo/Brand</Link>
        </div>
        <div className="navbar-menu">
          <div className="na">
            <Link to="/buy" className="navbar-item">Buy</Link>
            <Link to="/sell" className="navbar-item">Sell</Link>
            <Link to="/commercial" className="navbar-item">Commercial</Link>
            <Link to="/home" className="navbar-item">Home</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
