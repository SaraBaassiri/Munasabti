import React from "react";
import "./Footer.css";
import Logo from "../../../media/images/logov2.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="line" />
      <div className="Logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="Links">
        <div>
          <a href="/">Home</a>
          <a href="/">Services</a>
          <a href="/">Vendors</a>
          <a href="/">Inspirations</a>
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
