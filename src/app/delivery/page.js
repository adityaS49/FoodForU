"use client";
import CategoryChoice from "@/components/CategoryChoice/CategoryChoice";
import DeliveryFeed from "@/components/DeliveryFeed/DeliveryFeed";
import FoodItems from "@/components/FoodItems/FoodItems";
import Header from "@/components/Header";
import React from "react";

const Delivery = () => {
  return (
    <div>
      <Header />
      <div
        className={` flex flex-col w-[100%] pl-8 items-center max-[600px]:w-[100%] max-[600px]:p-0 `}
      >
        <div
          className={` flex flex-col w-[90%] items-center justify-center max-[900px]:w-[100%]`}
        >
          <CategoryChoice />
        </div>
        <FoodItems />
        <DeliveryFeed />
      </div>
    </div>
  );
};

export default Delivery;
