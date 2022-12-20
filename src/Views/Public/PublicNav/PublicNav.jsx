import React from "react";
import "./PublicNav.css";

export default function PublicNav() {
  return (
    <div className="PublicNav">
      <div className="PublicNav__logo">
        <img src="/images/Logo.jpg" alt="logo" />
      </div>
      <div className="PublicNav__links">
        <a href="/">Home</a>
        <a href="/Vendors">Vendors</a>
        <a href="/PlanningTools">Planning Tools</a>
        <a href="/Inspirations">Inspirations</a>
      </div>
      <div className="PublicNav__Logins">
        <div>
          <a href="/Vendor" id="vendor">
            Are you a vendor?
          </a>
        </div>
        <div>
          <a href="/Login">Login</a>
          <a href="/JoinNow">Join Now</a>
        </div>
      </div>
    </div>
  );
}
