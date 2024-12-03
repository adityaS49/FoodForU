import React from "react";
import { GoogleLogin } from "react-google-login";
const GoogleLoginComponent = () => {

    const OnSuccess = (res)=>{
        console.log("Login Successful, user: ",res.profileObj);
        router.replace("/");
    }
    const OnFailure = (res)=>{
        console.log("Login Failed, res: ",res);
    }

  return (
    <div>
      <GoogleLogin
        clientId="850793985212-lvqtlconfdj5mss6v39c421gelqtj01i.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={OnSuccess}
        onFailure={OnFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn  ={true}
      />
    </div>
  );
};

export default GoogleLoginComponent;
