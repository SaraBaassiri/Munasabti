import "./VendorNavbar.css";
import React from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../../firebase";

const VendorNav = ({ openSidebar }) => {
  const navigate = useNavigate();
  return (
    <div className="navbarVendor">
      <div className="nav_icon" onClick={() => openSidebar("navbar")}>
        <FaBars />
      </div>

      <div className="navbarVendor__inner">
        <p>{auth.currentUser.displayName}</p>
        {auth.currentUser?.photoURL !== "" ? (
          <img
            src={auth.currentUser?.photoURL}
            alt="logo"
            className="ProfilePhotonavbarVendor"
          />
        ) : (
          <img
            src="/images/profile_default.jpg"
            alt="logo"
            className="ProfilePhotonavbarVendor"
          />
        )}
        <Link to="/">
          <i className="fa fa-home"></i>
        </Link>
        <div
          to="/auth/profile"
          onClick={() => {
            auth.signOut().then(() => {
              navigate("/");
            });
          }}
        >
          <i className="fa fa-sign-out"></i>
        </div>
      </div>
    </div>
  );
};

export default VendorNav;
