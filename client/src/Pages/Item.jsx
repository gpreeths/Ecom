import React from "react";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import Icons from "../Components/Icons";

const Item = () => {
  return (
    <div>
      <Icons/>
      <Menu />
      

      {/* Item Card Section */}
      <div
        className="item_card"
        data-id="s1"
        data-name="Symbol Premium Men's Stylish Shirt"
        data-price="505.00"
      >
        <img
          className="item_images"
          src="https://m.media-amazon.com/images/I/51-pLhPHoBL._SY606_.jpg"
          alt="Shirt"
        />
        <div className="item_details">
          <h4>
            CB-COLEBROOK Men's Casual Button Down Shirts Long Sleeve Linen Shirt
            Fashion Textured Beach Summer Shirt
          </h4>
          <p>
            <sup>₹</sup>505.00
          </p>
          <h5>Product details</h5>
          <h6>
            Material composition: Soft, Breathable and Light Fabric
            <br />
            Fit type: Regular Fit
            <br />
            Sleeve type: Long Sleeve
            <br />
            Collar style: Spread Collar
            <br />
            Length: Standard Length
            <br />
            Neck style: Collared Neck
            <br />
            Country of Origin: India
          </h6>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Item;
