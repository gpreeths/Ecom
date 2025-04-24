import React, { useState } from "react";

import Footer from "../Components/Footer";
import Menu from "../Components/menu";
import Icons from "../Components/Icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


const HomePage = () => {
  const [products,setProducts]=useState([]);


  useEffect(()=>{
    const fetchProducts=async()=>{
      try{
        const response=await axios.get('http://localhost:3000/product/getproduct')
        setProducts(response.data)
        console.log(response.data);
        
      
      }
      catch(error){
        console.error('error fetching products:',error)
      }
        
      }
      fetchProducts()
    },[])
  
  return (
    
    <div className="container mx-auto p-6">
      <Icons />
      <Menu />


          <div className="product-row grid gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card border p-4 rounded-lg shadow-md"
                data-id={product.id}
                data-name={product.name}
                data-price={product.price}
              >
                {/* Link to item details page */}
                <Link to={`/item/${product.id}`}>
                  <img
                    className="images w-full h-40 object-cover rounded-lg mb-4"
                    src={`http://localhost:3000/${product.image}`}
                    alt={product.name}
                  />
                </Link>

                <h4 className="text-lg font-medium mb-2">{product.name}</h4>
                <p className="text-gray-700 mb-2">
                  <sup>₹</sup>
                  {product.price.toFixed(2)}
                </p>
                <button className="add-to-cart bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
     
   
      <Footer />
    </div>
  );
};

export default HomePage;
