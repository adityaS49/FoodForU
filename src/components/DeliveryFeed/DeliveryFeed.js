"use client"
import { Restaurant } from "@/Data/Delivery/Restaurants/Restaurant";
import React, { useState } from "react";
import DeliveryFeedCard from "./DeliveryFeedCard/DeliveryFeedCard";
import DeliveryFilter from "@/components/DeliveryFeed/DeliveryFilter/DeliveryFilter";
const DeliveryFeed = () => {
  let [filterTextValue, updateFilterText] = useState([]);
  let filterProductList = Restaurant.filter((product) => {
    if (filterTextValue.length > 0) {
      return filterTextValue.every((filter) => {
        if (filter === 4) {
          return product.rating >= 4;
        } else if (filter === 3) {
          return product.rating >= 3;
        } else if (filter === 2) {
          return product.rating >= 2;
        }else if (filter === 1) {
          return product.rating >= 1;
        }
        else if (filter === 700) {
          return product.price == 700;
        }
        else if (filter === 600) {
          return product.price == 600;
        }
        else if (filter === 500) {
          return product.price == 500;
        }
        else if (filter === 400) {
          return product.price == 400;
        }
        else if (filter === 600 && filter === 700) {
          return [
            product.price === 600 || product.price === 700
          ];
        }
        
        return true;
      });
    }
    return true;
  });

  function onfilterValueSelected(filterValues) {
    updateFilterText(filterValues);
  }
  return (
    <div className={`w-[90%] items-center justify-center p-4 max-[600px]:w-[100%]`}>
      <div>
        <DeliveryFilter  filterValueSelected={onfilterValueSelected} />
      </div>
      <div
        className={`flex flex-wrap w-[100%] max-[800px]:w-[100%]  p-4 max-[800px]:p-0 gap-16  max-[800px]:gap-4 `}
      >
        <DeliveryFeedCard 
          key={filterProductList.id}  
          u={filterProductList} 
        />
        </div>
    </div>
  );
};

export default DeliveryFeed;
