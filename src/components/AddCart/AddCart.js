"use client"
import React, { useState, useContext, useEffect } from "react";
import Header from "../Header";
import { AddCartItems } from "@/Data/Delivery/AddCartItems/AddCardItems";
import DeliveryCartTop from "../DeliveryFeed/DeliveryCart/deliveryCartTop/DeliveryCartTop";
import DeliveryCartAccr from "../DeliveryFeed/DeliveryCart/deliveryCartAcc/DeliveryCartAccr";
import {AppContext} from "../Context/AppContext";
import { Restaurant } from "@/Data/Delivery/Restaurants/Restaurant";
const AddCart = () => {
const [data,setData]=useState([])
const [topdata,setTopData]= useState([])
  const context = useContext(AppContext);
  
  useEffect(()=>{
    const demo= AddCartItems.find((item)=>item.id===parseInt(context.idContext,10) );
    setData(demo.items)
    const info = Restaurant.find((value)=>value.id===parseInt(context.idContext,10) );
  setTopData(info)
  }, [context.idContext])

  

  return (
    <div className="flex flex-col w-[90%]:p-5 max-[600px]:p-1 max-[600px] w-[100%] gap-4 items-center justify-center">
      <Header />
      <DeliveryCartTop values = {topdata} />
      <DeliveryCartAccr data={data}/>
      
    </div>
  );
};

export default AddCart;
