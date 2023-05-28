import React from 'react';
import './header.css';
const Header = () => {
  return (
    <div className="header">
      <div className="menu-icon">
        <i className="material-icons-outlined">menu</i>
      </div>

      <div className="header-left">
        <i className="material-icons-outlined">search</i>
        <input type="text" placeholder="search..."></input>
      </div>
      {/* <div className="logo">
        <h3>Logo</h3>
        <i className="material-icons-outlined">star</i>
      </div> */}

      <div className="header-icons">
        <i className="material-icons-outlined">notifications</i>
        <i className="material-icons-outlined">email</i>
        <i className="material-icons-outlined">account_circle</i>
      </div>
    </div>
  );
};

export default Header;
