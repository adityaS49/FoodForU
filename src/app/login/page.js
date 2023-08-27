"use client";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      setMessage("Login successful!");
    } else {
      setMessage("Login failed. Incorrect username or password.");
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh] w-[100%]">
      <div className="flex flex-col bg-gray-100 p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <div className="mb-2">
          <label className="block font-medium">Username:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Password:</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none"
          onClick={handleLogin}
        >
        Login
        </button>
        <p className="mt-2 text-red-600">{message}</p>
      </div>
    </div>
  );
}
