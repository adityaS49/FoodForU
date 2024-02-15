"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error during registration", error);
    }
  };
  return (
    <div className="flex h-screen  items-center justify-center">
      <div className="p-4  w-[300px] shadow-md rounded-lg border-t-4 border-green-400">
        <h1 className="text-lg font-bold my-4 text-center">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="py-2 text-sm font-semibold px-3 border-2 bg-zinc-100/40"
            type="text"
            placeholder=" Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="py-2 text-sm font-semibold px-3 border-2 bg-zinc-100/40"
            type="email"
            placeholder=" E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="py-2 text-sm font-semibold px-3 border-2 bg-zinc-100/40"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-green-400 text-white cursor-pointer px-6 py-2 font-bold">
            Register
          </button>

          {error && (
            <div className="bg-red-400 text-white w-fit text-sm py-2 px-4 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right font-semibold" href="/login">
            Already have an account?{" "}
            <span className="font-sm underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
