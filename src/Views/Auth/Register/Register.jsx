import React from "react";
import "./Register.css";

function Register() {
  return <div>
    <div className="regContainer">
      <h2 className="header">Temp Register</h2>
      <input type="email" placeholder="Enter email..." id="email" /> <br />
      <input type="text" placeholder="Enter first name..." id="Fname" /> <br />
      <input type="text" placeholder="Enter last name..." id="Lname" /> <br />
      <input type="password" placeholder="Enter password" id="pass" /> <br />
      <input type="password" placeholder="Confirm password" id="conPass" /> <br />
      <button id="btn">Register</button>
    </div>
  </div>;
}

export default Register;
