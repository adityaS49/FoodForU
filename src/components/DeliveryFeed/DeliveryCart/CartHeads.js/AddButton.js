import React, { useContext, useState } from "react";
import {AppContext,CartProvider} from "@/components/Context/AppContext";

const AddButton = ({ v }) => {
  const {cartItems,cartContextValue} = useContext(AppContext);
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
    addId(cartItem);
  };



  return (
    <div className="add flex items-center">
      <div className="flex">
        {
         <div
          className="border-2 border-grey px-2 cursor-pointer"
          onClick={() => handleDecrement(items)}
        >
          -
        </div>
        }
        {
          <button onClick={() => handleAddToCart(v)} className={`px-4 py-[6px]`}>Add</button>
        }
       {
         <div
        className="border-2 border-grey px-2 cursor-pointer"
        onClick={() => handleIncrement(items)}
      >
        +
      </div>
       }
      </div>
    </div>
  );
};

export default AddButton;
