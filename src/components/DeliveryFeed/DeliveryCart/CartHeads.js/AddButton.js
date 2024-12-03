import React, { useContext, useEffect, useState } from "react";
import { AppContext, CartProvider } from "@/components/Context/AppContext";
import {toast} from 'react-toastify'

const AddButton = ({ v }) => {
  const { cartContextValue } = useContext(AppContext);
 
  const addId = (item) => {
    
    cartContextValue.addItemToCart(item);
    
  };

  const handleAddToCart = (cartItem) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new item to the cart
    toast.success("Item Added To Cart")
    existingCart.push(cartItem);
    console.log(cartItem);
   existingCart.map((item)=>{
    return (
      addId(item)
    )
   })
    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

  };

  // useEffect(()=>{
  //   const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
  //   cartProducts.map((item) => {
  //     return addId(item);
  //   });
  // },[])

  // useEffect(()=>{
  //   localStorage.removeItem('cart');
  // })

  return (
    <div className=" justify-center flex items-center">
      {
        <button onClick={() => handleAddToCart(v)} className={`px-6 py-[6px]`}>
          Add
        </button>
      }
    </div>
  );
};

export default AddButton;
