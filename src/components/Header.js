import {React,useContext} from "react";
import {  Person, Search, ShoppingCart } from "@mui/icons-material";
import {AppContext} from "@/components/Context/AppContext";
import Link from "next/link";
const Header = () => {
  const context = useContext(AppContext);

  return (
    <header className={`flex justify-between gap-8 py-4 px-8 w-[100%] mb-5 max-[900px]:flex-col bg-[#c7c4c4] `}> 
      <div className={`flex items-center justify-center max-[900px]:shadow-[1px_3px_18px_0px_rgba(0,0,0,0.25)] rounded-xl`}>
        <div className="logoHeading">
        <Link href="/">
          <h3 className={`text-[30px] font-semibold 
           cursor-pointer`}>Food For U</h3>
           </Link>
        </div>

      </div>    
      <div className={`w-[40%] shadow-[1px_3px_18px_0px_rgba(0,0,0,0.25)] rounded-xl pl-3  max-[900px]:w-[100%] bg-white `}>
        <div className={` flex items-center justify-center gap-2 w-[100%]`}>
          <Search style={{ color: "black" }} />
          <input
           placeholder="Search for restaurant, cuisine, or a dish"
            className={`rounded-xl w-[100%] h-[50px] focus:outline-none max-[500px]:text-[10px]::placeholder` }
            type="text"
          />
        </div>
      </div>
      <div className="options flex gap-4  items-center justify-center">
      <Link href="/cart">
      <span className={`flex items-center cursor-pointer border-2 py-2 px-4 rounded ${context.cartItems.length > 0 ? 'bg-[#1aed1a] border-green-500 text-white': 'border-black'}`}>
      <ShoppingCart /> Cart <span>({context.cartItems.length})</span>
    </span>
      </Link>
      <Link href="/login">
      <span className='cursor-pointer border-2 py-2 px-4 rounded border-black flex items-center'><Person/>Sign In</span>
      </Link>
      <Link href="/signup">
      <span className='cursor-pointer border-2 py-2 px-4 rounded border-black flex items-center'><Person/>Sign Up</span>
      </Link>
      </div>
    </header>
  );
};

export default Header;
