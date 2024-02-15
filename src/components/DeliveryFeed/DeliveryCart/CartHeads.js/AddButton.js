import React, { useContext, useEffect, useState } from "react";
import { AppContext, CartProvider } from "@/components/Context/AppContext";

const AddButton = ({ v }) => {
  const { cartContextValue } = useContext(AppContext);
  // console.log(v);
  // console.log(cartItems);
  // const [flag,setFlag] =useState(false)

  // const x= cartItems.filter(item=>item.id==v.id)
  // console.log(Object. keys(x). length)
  // if(Object. keys(x). length>0) setFlag(true)
  // else setFlag(false)
  const addId = (item) => {
    cartContextValue.addItemToCart(item);
    console.log(item);
  };

  const handleAddToCart = (cartItem) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new item to the cart
    existingCart.push(cartItem);

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
