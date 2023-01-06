import React from "react";
import "./PublicNav.css";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiAdminLine } from "react-icons/ri";
import { useSelector } from "react-redux";

export default function PublicNav() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);

  return (
    <div className="PublicNav">
      <div
        className="PublicNav__logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="/images/Logo.jpg" alt="logo" />
      </div>
      <div className="PublicNav__links">
        <Link to="/">Home</Link>
        <Link to="/Vendors">Vendors</Link>
        <Link to="/PlanningTools">Planning Tools</Link>
        <Link to="/Inspirations">Inspirations</Link>
      </div>
      {auth.currentUser ? (
        <div className="PublicNav__LoggedIn">
          <Link to="/auth/profile">
            <CgProfile size={35} />
          </Link>
          {user.isAdmin && (
            <Link to="/admin">
              <RiAdminLine size={35} />
            </Link>
          )}
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
