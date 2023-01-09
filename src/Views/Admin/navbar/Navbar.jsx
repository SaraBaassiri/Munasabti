import "./Navbar.css";
import React from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";

const Navbar = ({ openSidebar }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="nav_icon" onClick={() => openSidebar("navbar")}>
        <FaBars />
      </div>

      <div className="navbar__left">
        <div>
          {auth.currentUser?.photoURL !== "" ? (
            <img
              src={auth.currentUser?.photoURL}
              alt="logo"
              className="ProfilePhotoNavbar"
            />
          ) : (
            <img
              src="/images/profile_default.jpg"
              alt="logo"
              className="ProfilePhotoNavbar"
            />
          )}
        </div>
        <p className="active_link">{auth.currentUser.displayName}</p>
      </div>
      <div className="navbar__right">
        <Link to="/">
          <i className="fa fa-home"></i>
        </Link>
        <Link to="/auth/profile">
          <i className="fa fa-user"></i>
        </Link>
        <div
          to="/auth/profile"
          onClick={() => {
            auth.signOut().then(() => {
              navigate("/");
            });
          }}
        >
          <i className="fa fa-power-off"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
