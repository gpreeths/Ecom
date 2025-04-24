import React from 'react';
import cartIcon from './cart.png';
import Amazonicon from './images.png';
import { Link } from 'react-router-dom';

function Icons() {
  return (
    <div className="header">
      <Link to="/">
        <img className="amazon_icon" src={Amazonicon} alt="Amazon Icon" />
      </Link>

    
      <Link to="/cart">
        <img className="cart" src={cartIcon} alt="Cart Icon" />
        <span id="cart-count">0</span> {/* Cart count */}
      </Link>
    </div>
  );
}

export default Icons;
