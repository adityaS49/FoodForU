"use client"
import { DeliveryDiningOutlined,DiningOutlined,NightlifeOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./categorychoice.css"


const CategoryChoice = () => {
    const [category,setCategory] = useState('Delivery');

  return (
    <div className="select">
      <div className="selectWrapper">
        <div className="selectWrapperItem" onClick={() => setCategory('Delivery')}
        style={{
            borderBottom: category === 'Delivery' && '3px solid #FC1503',
            
        }}   >
          <div className="selectWrapperItemLogo">
            <DeliveryDiningOutlined style={{fontSize:"36px", color: category === 'Delivery' && ' #FC1503'}} />
          </div>
          <div className="selectWrapperItemHeading">
            <h1 style={{color: category === 'Delivery' && ' #FC1503'}}>Delivery</h1>
          </div>
        </div>
        <div className="selectWrapperItem" onClick={() => setCategory('Dining')}
        style={{
            borderBottom: category === 'Dining' && '3px solid #FC1503',
        }}   >
          <div className="selectWrapperItemLogo">
            <DiningOutlined  style={{fontSize:"36px", color: category === 'Dining' && ' #FC1503'}}/>
          </div>
          <div className="selectWrapperItemHeading">
            <h1 style={{color: category === 'Dining' && ' #FC1503'}}>Dining Out</h1>
          </div>
        </div>
        <div className="selectWrapperItem" onClick={() => setCategory('NightLife')}
        style={{
            borderBottom: category === 'NightLife' && '3px solid #FC1503',
         
        }}  >
          <div className="selectWrapperItemLogo">
            <NightlifeOutlined style={{fontSize:"36px", color: category === 'NightLife' && ' #FC1503'}}/>
          </div>
          <div className="selectWrapperItemHeading">
            <h1 style={{color: category === 'NightLife' && ' #FC1503'}}>Nightlife</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryChoice;
