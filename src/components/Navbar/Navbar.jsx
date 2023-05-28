import React from 'react';
import './navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="link">
        <a href="/">Dashboard</a>
        <i className="material-icons-outlined">dashboard</i>
      </div>
      <div className="link">
        <a href="/">Products</a>
        <i className="material-icons-outlined">inventory_2</i>
      </div>
      <div className="link">
        <a href="/">Customers</a>
        <i className="material-icons-outlined">groups</i>
      </div>
      <div className="link">
        <a href="/">Reports</a>
        <i className="material-icons-outlined">poll</i>
      </div>
    </div>
  );
};

export default Navbar;
