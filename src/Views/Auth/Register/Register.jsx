import React from "react";
import "./Register.css";
import { auth, db } from "../../../firebase";
import { setTrue, setFalse } from "../../../Redux/reducers/loadingSlice";
import { setData } from "../../../Redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    document.title = "Munasabti | Register";
  }, []);
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(setTrue());
    if (password === confirmPassword) {
      const data = Object.assign({
        email: email,
        name: name,
        isAdmin: false,
        isVendor: false,
      });
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          db.collection("Users")
            .doc(auth.user.uid)
            .set({
              email: email,
              name: name,
              isAdmin: false,
              isVendor: false,
            })
            .then(() => {
              dispatch(setData(data));
              dispatch(setFalse());
              navigate("/");
            })
            .catch((e) => {
              dispatch(setFalse());
              alert(e.message);
            });
        })
        .catch((e) => {
          dispatch(setFalse());
          alert(e.message);
        });
    } else {
      dispatch(setFalse());
      alert("Passwords do not match");
    }
  };

  return (
    <div>
      <div className="regContainer">
        <h2 className="header">Temp Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Enter email..."
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter first name..."
            id="Fname"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter last name..."
            id="Lname"
            onChange={(e) => setName(`${name} ${e.target.value}`)}
          />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            id="pass"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm password"
            id="conPass"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <button id="btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
