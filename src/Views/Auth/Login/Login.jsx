import React from "react";
import "./Login.css";
import { db, auth } from "../../../firebase";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    console.log(email);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        document.location.href = "/";
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="LoginContainer">
      <h2 id="header">Temp Login Page</h2>
      <input
        type="email"
        id="email"
        placeholder="Enter email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        placeholder="Enter password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        id="loginButton"
        onClick={() => {
          handleSubmit();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
