"use client";
import React, { useContext, useState } from "react";
import {
  Search,
  ShoppingCart,
  Person,
  Person2,
} from "@mui/icons-material";
import { AppContext } from "@/components/Context/AppContext";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Header = () => {
  const context = useContext(AppContext);
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const handleClick = () => setActive((prev) => !prev);

  return (
    <header className="flex flex-wrap justify-between items-center p-4 lg:px-12 bg-[#f0efef] shadow-md">
      {/* Logo */}
      <div className="mb-4 lg:mb-0">
        <Link href="/" className="text-2xl lg:text-3xl font-bold text-orange-600">
          Food For U
        </Link>
      </div>

      {/* Search Bar */}
      <div className="w-full lg:w-[40%] mb-4 lg:mb-0">
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
          <Search className="text-gray-600" />
          <input
            placeholder="Search for restaurant, cuisine, or a dish"
            className="ml-2 w-full outline-none text-sm"
            type="text"
          />
        </div>
      </div>

      {/* Options: Cart & Login/User */}
      <div className="flex items-center gap-4">
        {/* Cart */}
        <Link href="/cart">
          {context.cartItems.length > 0 ? (
            <div className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-green-600 transition">
              <ShoppingCart />
              <span>Cart ({context.cartItems.length})</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition">
              <ShoppingCart />
              <span>Cart</span>
            </div>
          )}
        </Link>

        {/* Sign In / User Dropdown */}
        {session ? (
          <div className="relative">
            <button
              className="flex items-center gap-2 font-semibold text-gray-800 hover:text-orange-600 transition"
              onClick={handleClick}
            >
              {session.user.name}
              <Person2 />
            </button>
            {active && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md z-10">
                <button
                  onClick={signOut}
                  className="w-full px-6 py-2 text-red-600 hover:bg-red-100 transition text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <div className="flex items-center gap-2 text-gray-800 font-semibold hover:text-orange-600 transition cursor-pointer">
              <Person />
              <span>Sign In</span>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
