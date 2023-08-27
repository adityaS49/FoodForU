import { Foods } from "@/Data/Delivery/FoodItems/FoodItemsData";
import React from "react";
import "./FoodItems.css";
const FoodItems = () => {

 
  return (
    <div className="foodItemsBanner">
      <div className="foodItemsHeading">
        <h1>Eat What Makes You Happy</h1>
      </div>
      <div className="foodItemsScroll">
        {Foods.map((u) => (
          <div className="foodItemsCard" key={u.id} >
            <div className="foodItemsLogo">
              <img src={u.foodImgSrc} alt="" />
            </div>
            <div className="foodItemsTopic">{u.title}</div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
