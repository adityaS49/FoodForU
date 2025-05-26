"use client";
import { React, useContext, useState } from "react";
import styles from "./cartPanel.module.css";
import {
  CurrencyRupee,
  LocationOn,
  Payment,
  Person,
} from "@mui/icons-material";
import { AppContext } from "@/components/Context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import AddressForm from "../deliveryaddresss/AddressForm";
import DeliveryAddress from "../deliveryaddresss/DeliveryAddress";

const CartPanel = () => {
  const { data: session } = useSession();

  const context = useContext(AppContext);
  const { showAddressForm, setShowAddressForm } = useContext(AppContext);
  {
    context.cartItems ? console.log(context.cartItems) : null;
  }
  {
    context.totalPrice ? console.log(context.totalPrice) : null;
  }

  const handleIncrement = (item) => {
    const updatedCartItems = context.cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    );
    const filteredCartItems = updatedCartItems.filter(
      (cartItem) => cartItem.count > 0
    );

    context.setCartItems(filteredCartItems);

    const newTotalPrice = updatedCartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.count;
    }, 0);
    context.setTotalPrice(newTotalPrice);
  };

  const handleDecrement = (item) => {
    const updatedCartItems = context.cartItems.map((cartItem) =>
      cartItem.id === item.id && cartItem.count > 0
        ? { ...cartItem, count: cartItem.count - 1 }
        : cartItem
    );
    const filteredCartItems = updatedCartItems.filter(
      (cartItem) => cartItem.count > 0
    );

    context.setCartItems(filteredCartItems);

    const newTotalPrice = updatedCartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.count;
    }, 0);
    context.setTotalPrice(newTotalPrice);
  };

  const filteredCartItems = context.cartItems.filter((item) => item.count > 0);

  return (
    <div
      className={`${styles.cartBanner} flex flex-col gap-10 lg:flex-row px-4 py-8`}
    >
      {/* Left Side */}
      <div className={`${styles.left} w-full lg:w-[60%] space-y-10`}>
        {/* Account Login */}
        {!session && (
          <div className={styles.account}>
            <div className={styles.heading}>
              <div className="bg-zinc-200 shadow-sm rounded p-3 w-fit mb-2">
                <Person />
              </div>
              <h1 className="text-xl font-bold">Account</h1>
              <p className="text-sm text-gray-600">
                To place your order now, log in to your existing account or sign
                up.
              </p>
            </div>
            <div
              className={`${styles.credentials} flex flex-col sm:flex-row gap-4 mt-4`}
            >
              <Link href="/login" passHref>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto">
                  Have an Account?
                  <br />
                  <span className="font-semibold">Login</span>
                </button>
              </Link>
              <Link href="/signup" passHref>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto">
                  New to OrderKaro?
                  <br />
                  <span className="font-semibold">Sign-Up</span>
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Address Section */}
        <div className={styles.address}>
          <div className={styles.heading}>
            <div className="bg-zinc-200 shadow-sm rounded p-3 w-fit mb-2">
              <LocationOn />
            </div>
            <h1 className="text-xl font-bold">Delivery Address</h1>
          </div>

          <DeliveryAddress />

          <button
            className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
            onClick={() => setShowAddressForm(!showAddressForm)}
          >
            {showAddressForm ? "Hide Address Form" : "Add New Address"}
          </button>

          {showAddressForm && <AddressForm />}
        </div>

        {/* Payment Section */}
        <div className={styles.payment}>
          <div className={styles.heading}>
            <div className="bg-zinc-200 shadow-sm rounded p-3 w-fit mb-2">
              <Payment />
            </div>
            <h1 className="text-xl font-bold">Payment</h1>
          </div>
        </div>
      </div>

      {/* Right Side (Cart Summary) */}
      {filteredCartItems.length > 0 ? (
        <div className={`${styles.right} w-full lg:w-[40%] space-y-6`}>
          {/* Shop Header */}
          <div className="border-b pb-3">
            <div className="text-lg font-semibold">Ranchi Cake Shop</div>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {filteredCartItems.map(
              (items) =>
                items.count > 0 && (
                  <div
                    key={items.id}
                    className="flex items-center justify-between bg-white p-3 rounded shadow"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        width={20}
                        height={20}
                        alt="img"
                        src={items.FoodState}
                      />
                      <h6 className="text-sm">{items.name}</h6>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="border border-gray-400 px-2 rounded"
                        onClick={() => handleDecrement(items)}
                      >
                        -
                      </button>
                      <span>{items.count}</span>
                      <button
                        className="border border-gray-400 px-2 rounded"
                        onClick={() => handleIncrement(items)}
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-1">
                      <CurrencyRupee style={{ fontSize: "12px" }} />
                      <h6 className="text-sm">{items.price * items.count}</h6>
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Billing Summary */}
          <div className="bg-white rounded p-4 shadow space-y-4">
            <h2 className="text-lg font-semibold">Bill Details</h2>

            <div className="flex justify-between">
              <span>Items Total</span>
              <span className="flex items-center">
                <CurrencyRupee style={{ fontSize: "14px" }} />
                {context.totalPrice}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Price | 2.6kms</span>
              <span className="flex items-center">
                <CurrencyRupee style={{ fontSize: "14px" }} />
                {context.totalPrice}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span className="flex items-center">
                <CurrencyRupee style={{ fontSize: "14px" }} />2
              </span>
            </div>

            <div className="flex justify-between">
              <span>GST & Charges</span>
              <span className="flex items-center">
                <CurrencyRupee style={{ fontSize: "14px" }} />2
              </span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>To Pay</span>
              <span className="flex items-center">
                <CurrencyRupee style={{ fontSize: "14px" }} />
                {context.totalPrice}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full lg:w-[35%] h-[500px] gap-6 text-center">
          <h1 className="text-xl font-semibold">Opps! Your Cart is Empty 🙄</h1>
          <p className="text-gray-600">
            You can go to home page to view more restaurants.
          </p>
          <Link href="/delivery">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold">
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default CartPanel;
