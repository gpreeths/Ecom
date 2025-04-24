import React from 'react'
import Icons from '../Components/Icons'
import Footer from '../Components/Footer'

function Cart() {


  
  return (
    <div className="scart">
    <Icons/>
    <h1>Your Shopping Cart</h1>
    <div className="cart-items" />
    <div className="cart-total">
      <h3>
        Total Amount: <span id="cart-total">₹0</span>
      </h3>
    </div>
    <div className="cartbutton">
      <a href="home.html">
        <button className="close">Close</button>
      </a>
      <button className="checkout">Checkout</button>
    </div>
    <Footer/>
  </div>
  )
}

export default Cart