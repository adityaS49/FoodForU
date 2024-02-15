"use client"
import {React,useContext, useState} from "react";
import { ArrowDownward, Person, Search, ShoppingCart } from "@mui/icons-material";
import {AppContext} from "@/components/Context/AppContext";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const Header = () => {
  const context = useContext(AppContext);
  const {data:session} = useSession();
  const [active,setActive] = useState(false)

  const  handleClick = ()=>{
    setActive(prevActive => !prevActive);
  }
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
      {
        context.cartItems.length > 0 ?(
          <span className={`flex items-center cursor-pointer  py-2 px-4 rounded bg-[#1aed1a] border-green-500 text-white`}>
      <ShoppingCart /> Cart <span>({context.cartItems.length})</span>
    </span>
        ):(
          <span className={`flex items-center cursor-pointer py-2 px-4 rounded border-black'}`}>
      <ShoppingCart /> Cart <span></span>
    </span>
        )

      }
      
      </Link>
     
      {
        session?(<span className='cursor-pointer flex flex-col gap-2 relative items-center'>
        <div className="flex gap-1 items-center justify-center" onClick={handleClick}>
          {session.user.name} <ArrowDownward style={{fontSize:'16px'}}/>
        </div>
        <div className="absolute top-10" style={{ display: active ? 'block' : 'none' }}>
        <button className="bg-red-400 rounded text-white px-6 py-2" onClick={signOut}>Logout</button>
      </div>
        </span>):(
          <Link href="/login">
          <span className='cursor-pointer font-semibold  flex justify-center gap-1 items-center'> <Person/> Sign In</span>
          </Link>)
      }
      
      </div>
    </header>
  );
};

export default Header;
