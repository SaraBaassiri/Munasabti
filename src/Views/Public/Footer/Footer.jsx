import React from "react";
import "./Footer.css";
import Logo from "../../../media/images/logov2.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="line" />
      <div className="Logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="Links">
        <div>
          <Link to="/">Home</Link>
          <Link to="/">Services</Link>
          <Link to="/vendors">Vendors</Link>
          <Link to="/">Inspirations</Link>
        </div>
      </div>
      <div className="partTwo">
        <a href="/">loremipsum@domain.com</a>
        <a href="/">00 - 123456</a>
      </div>
      <h6>Copyright 2022</h6>
    </div>
  );
}
