import React from "react";
import "./Login.css";
import { auth, db } from "../../../firebase";
import { useDispatch } from "react-redux";
import { setFalse, setTrue } from "../../../Redux/reducers/loadingSlice";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    document.title = "Munasabti | Login";
  });

  const provider = new GoogleAuthProvider();

  const handleSubmit = () => {
    dispatch(setTrue());
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        dispatch(setFalse());
        navigate("/");
      })
      .catch((e) => {
        dispatch(setFalse());
        alert(e.message);
      });
  };

  // TODO: fix
  // const handleRegisterWithGoogle = () => {
  //   auth.signInWithPopup(provider).then((result) => {});
  // };

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
