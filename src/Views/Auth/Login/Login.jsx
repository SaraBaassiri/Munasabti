import React from "react";
import "./Login.css";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { setFalse, setTrue } from "../../../Redux/reducers/loadingSlice";
import { db } from "../../../firebase";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    dispatch(setTrue());
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        dispatch(setFalse());
        document.location.href = "/";
      })
      .catch((e) => {
        dispatch(setFalse());
        alert(e.message);
      });
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
