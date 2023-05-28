import React from 'react';
import './cards.css';
const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-inner">
          <h3>Products</h3>
          <i className="material-icons-outlined">inventory_2</i>
        </div>
        <p>2480</p>
      </div>
      <div className="card">
        <div className="card-inner">
          <h3>Categories</h3>
          <i className="material-icons-outlined">category</i>
        </div>
        <p>42</p>
      </div>
      <div className="card">
        <div className="card-inner">
          <h3>Customers</h3>
          <i className="material-icons-outlined">groups</i>
        </div>
        <p>1200</p>
      </div>
      <div className="card">
        <div className="card-inner">
          <h3>Alerts</h3>
          <i className="material-icons-outlined">notification_important</i>
        </div>
        <p>50</p>
      </div>
    </div>
  );
};

export default Cards;
