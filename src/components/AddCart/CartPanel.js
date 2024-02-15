"use client";
import { React, useContext, useState } from "react";
import styles from "./cartPanel.module.css";
import { CurrencyRupee, LocationOn, Payment, Person } from "@mui/icons-material";
import { AppContext } from "@/components/Context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import AddressForm from "../deliveryaddresss/AddressForm";
import DeliveryAddress from "../deliveryaddresss/DeliveryAddress";

const CartPanel = () => {
  const { data: session } = useSession();;

  const context = useContext(AppContext);
  const { showAddressForm , setShowAddressForm  } = useContext(AppContext);
  {
    context.cartItems?(
      console.log(context.cartItems)
    ):null
  }
  {
    context.totalPrice?(
      console.log(context.totalPrice)
    ):null
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
    <div className={`${styles.cartBanner} flex-col lg:flex-row `}>
      <div className={`${styles.left} lg:w-[50%]`}>
        {!session ? (
          <div className={styles.account}>
            <div className={styles.heading}>
            <div className="bg-zinc-200 ml-[-3rem] shadow-sm rounded p-3 w-fit">
            <Person/>
          </div>
              <h1>Account</h1>
              <p>
                To place your order now, log in to your existing account or sign
                up.
              </p>
            </div>
            <div className={styles.credentials}>
              <Link href="/login">
                <button className={styles.login}>
                  Have an Account?
                  <br />
                  <span className={styles.log}> Login-Up</span>
                </button>
              </Link>
              <Link href="/signup">
                <button className={styles.signUp}>
                  New to OrderKaro?
                  <br />
                  <span className={styles.sign}>Sign-Up</span>
                </button>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={styles.address}>
          <div className={styles.heading}>
            <div className="bg-zinc-200 ml-[-3rem] shadow-sm rounded p-3 w-fit">
              <LocationOn/>
            </div>
             <h1>Delivery Address</h1>
          </div>
          
          <DeliveryAddress/>
          <div>
          <button className="px-4 py-2 bg-gray-500 text-white" onClick={()=>setShowAddressForm(!showAddressForm)}>
          {showAddressForm?"Hide AddressForm":"Add New Address"}
        </button>
          </div>
          {
            showAddressForm?(
              <AddressForm/>
            ):null
          }
          
        </div>
        <div className={styles.payment}>
          <div className={styles.heading}>
          <div className="bg-zinc-200 ml-[-3rem] shadow-sm rounded p-3 w-fit">
              <Payment/>
            </div>
            <h1>Payment</h1>
          </div>
        </div>
      </div>
      {filteredCartItems.length ? (
        <div className={`${styles.right} lg:w-[25%]`}>
          <div className={styles.top}>
            <div
              className={` w-[55%] border-b-2 border-solid border-grey pb-3 max-[600px]:w-[100%]`}
            >
              <div className="deliveryCardTitle">
                <div
                  style={{ fontSize: "18px", fontWeight: "600" }}
                  className={`cardtitle`}
                >
                  Ranchi Cake Shop
                </div>
              </div>
            </div>
          </div>
          {filteredCartItems.map((items) => (
            <div className={styles.products} key={items.id}>
              {items.count > 0 && (
                <div className={`px-2 flex justify-between`}>
                  <div className={`flex items-center gap-1`}>
                    <span>
                      <Image
                        width={10}
                        height={10}
                        alt="img"
                        src={items.FoodState}
                      />
                    </span>
                    <span>
                      <h6 className="font-[12px]">{items.name}</h6>
                    </span>
                  </div>
                  <div className="flex items-center justify-around px-2">
                    <div
                      className="border-2 border-grey px-2 cursor-pointer"
                      onClick={() => handleDecrement(items)}
                    >
                      -
                    </div>
                    <div className="quantity p-2">{items.count}</div>
                    <div
                      className="border-2 border-grey px-2 cursor-pointer"
                      onClick={() => handleIncrement(items)}
                    >
                      +
                    </div>
                  </div>
                  <div className={`flex items-center`}>
                    <CurrencyRupee style={{ fontSize: "12px" }} />
                    <h6 style={{ fontSize: "12px" }}>
                      {items.price * items.count}
                    </h6>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className={styles.billing}>
            <div className={styles.billDetails}>
              <h1>Bill Details</h1>
            </div>

            <div className={styles.itemsBill}>
              <div className={styles.itemsPrice}>
                <span>Items Total</span>
                <span>
                  <CurrencyRupee style={{ fontSize: "14px" }} />
                  {context.totalPrice}
                </span>
              </div>
              <div className={styles.itemsPrice}>
                <span>Delivery Price | 2.6kms</span>
                <span>
                  <CurrencyRupee style={{ fontSize: "14px" }} />
                  {context.totalPrice}
                </span>
              </div>
            </div>
            <div className={styles.fees}>
              <div className={styles.platformFees}>
                <span>
                  <h1>Platform fee</h1>
                </span>
                <span
                  className="flex items-center"
                  style={{ fontSize: "14px" }}
                >
                  <h1 className="flex items-center">
                    <CurrencyRupee style={{ fontSize: "14px" }} />2
                  </h1>
                </span>
              </div>
              <div className={styles.Gst}>
                <span>
                  <h1>GST and Restaurant Charges</h1>
                </span>
                <span>
                  <h1>
                    <CurrencyRupee style={{ fontSize: "14px" }} />2
                  </h1>
                </span>
              </div>
            </div>
            <div className={styles.totalPrice}>
              <span className="text-[16px] font-bold">
                <h1>To Pay</h1>
              </span>
              <span className="text-[14px] font-bold">
                <CurrencyRupee
                  style={{ fontSize: "14px", fontWeight: "500" }}
                />
                {context.totalPrice}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-[35%] h-[600px] gap-8">
        <div className="gap-2">
        <h1 className="text-center text-[20px] font-bold ">
        Oppsss!! Your Cart is empty🙄
        </h1>
        <p>You can go to home page to view more restaurants</p>
        </div>
          <div className="bg-orange-500 rounded p-4 cursor-pointer">
            <Link href="/delivery">
              <h6 className="text-white font-bold">SEE RESTAURANTS NEAR YOU</h6>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartPanel;
