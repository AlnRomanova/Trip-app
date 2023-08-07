import React from "react";
import { GoogleLogin } from "react-google-login";

const YOUR_GOOGLE_CLIENT_ID = "425592108293-a00b77p5qoknd4pd85a3b6b84hl6ggan.apps.googleusercontent.com";

const Login = () => {
  const handleGoogleLoginSuccess = (response) => {
    console.log("Logged in successfully!", response);
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Login failed:", error);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={handleGoogleLoginSuccess}
        onFailure={handleGoogleLoginFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;