import React from "react";
import "./Login.css";

function Login() {
  return <div>
    <h2 id="header">Temp Login Page</h2>
    <input type="email" id="email" placeholder="Enter email..."/>
    <input type="password" id="password" placeholder="Enter password..."/>
    <button id="loginButton">Login</button>
  </div>;
}

export default Login;
