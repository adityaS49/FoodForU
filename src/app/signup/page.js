"use client";
import RegisterForm from "@/components/credentials/RegisterForm";
import Loader from "@/components/Loader/Loader";
import React, { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading&&<Loader text="Waiting to Register" />}
      <RegisterForm setLoading = {setLoading}/>
    </div>
  );
};

export default Register;
