import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Pages/Login'

function Menu() {
  return (
    <div className="menubar">
    <div className="menu_item">
      <a href="#Shirts">Shirts</a>
    </div>

    <div className="menu_item">
      <a href="#Pants">Pants</a>
    </div>
    <div className="menu_item">
      <a href="#Shoes">Shoes</a>
    </div>
    <div className="menu_item">
      <a href="#Offers">Today's Offers</a>
    </div>
    <div className="menu_item">
      <Link to={'/login'}>Login</Link>
    </div>
    <div className="menu_item">
      <Link to={'/signup'}>Signup</Link>
    </div>
    
  </div>
  )
}

export default Menu