import React from "react";
import "./PublicNav.css";
import { auth } from "../../../firebase";
import { Link } from "react-router-dom";

export default function PublicNav() {
  return (
    <div className="PublicNav">
      <div className="PublicNav__logo">
        <img src="/images/Logo.jpg" alt="logo" />
      </div>
      <div className="PublicNav__links">
        <Link to="/">Home</Link>
        <Link to="/Vendors">Vendors</Link>
        <Link to="/PlanningTools">Planning Tools</Link>
        <Link to="/Inspirations">Inspirations</Link>
      </div>
      {auth.currentUser ? (
        <div className="PublicNav__Logins">
          <Link to="/auth/profile">Profile</Link>
          <Link to="/admin">admin</Link>
        </div>
      ) : (
        <div className="PublicNav__Logins">
          <div>
            <Link to="/Vendor" id="vendor">
              Are you a vendor?
            </Link>
          </div>
          <div>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/register">Join Now</Link>
          </div>
        </div>
      )}
    </div>
  );
}
