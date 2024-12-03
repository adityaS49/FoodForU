"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {toast} from 'react-toastify'
import GoogleLoginComponent from "./GoogleLogin";
import {gapi} from 'gapi-script'
const LoginForm = () => {
const clientid = "850793985212-lvqtlconfdj5mss6v39c421gelqtj01i.apps.googleusercontent.com"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientid,
        scope:""
      })
    };
    gapi.load('client:auth2',start);
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
    
      if (res.error) {
        toast.error("Invalid Credentials")
        return;
      }
      toast.success("Logged In Successfully")
      router.replace("/");
    } catch (error) {   
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-10 h-screen  items-center justify-center">
      <div className="p-4  w-[300px] shadow-md rounded-lg border-t-4 border-green-400">
        <h1 className="text-lg font-bold my-4 text-center">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input onChange={(e) => setEmail(e.target.value)} className="py-2 text-sm font-semibold px-3 border-2 bg-zinc-100/40" type="email" placeholder=" E-mail" />
          <input  onChange={(e) => setPassword(e.target.value)} className="py-2 text-sm font-semibold px-3 border-2 bg-zinc-100/40" type="password"  placeholder="Password" />
          <button className="bg-green-400 text-white cursor-pointer px-6 py-2 font-bold">Login</button>

          <Link className="text-sm mt-3 text-right font-semibold" href='/signup'>
          Do not have an account? <span className="font-sm underline">Register</span>
          </Link>
        </form>
      </div>
      <div>
      <GoogleLoginComponent/>
      </div>
    </div>
  );
};

export default LoginForm;
