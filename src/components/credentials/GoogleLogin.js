"use client";
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

const GoogleLoginComponent = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const OnSuccess = async (res) => {
    console.log("Login Successful, user: ", res.profileObj);
    const name = res.profileObj.givenName;
    const email = res.profileObj.email;
    const password = res.profileObj.googleId;

    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        try {
          const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });

          if (res.error) {
            toast.error("Invalid Credentials");
            return;
          }
          toast.success("Welcome back!");
          router.replace("/");
        } catch (error) {
          console.log(error);
        }
        return;
      }

      const resRegister = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await resRegister.json();

      if (resRegister.ok) {
        try {
          const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });

          if (res.error) {
            toast.error("Invalid Credentials");
            return;
          }
          toast.success("Logged In Successfully");
          router.replace("/");
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.error(data.message || "Registration failed");
        setError("User registration failed");
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Something went wrong!");
      setError("Google registration failed");
    }
  };

  const OnFailure = (res) => {
    console.log("Google Login Failed:", res);
    toast.error("Google login failed");
  };

  return (
    <div>
      <GoogleLogin
        clientId="850793985212-lvqtlconfdj5mss6v39c421gelqtj01i.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={OnSuccess}
        onFailure={OnFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
      />
    </div>
  );
};

export default GoogleLoginComponent;
