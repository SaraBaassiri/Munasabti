import React from "react";
import "./Nav.css";
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi";
import { BiStoreAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { auth } from "../../../firebase";

function AdminNav() {
  return (
    <div className="NavBar">
      <div>
        <h3 className="mainNavTitle">Munasabti Admin</h3>
        <div className="NavBarItem">
          <h3 className="InnerTitle">Menu</h3>
          <a href="/admin">
            <HiOutlineHome /> Dashboard
          </a>
          <a href="/admin/users">
            <HiOutlineUsers /> Users
          </a>
          <a href="/admin/vendors">
            <BiStoreAlt /> Vendors
          </a>
          <a href="/admin/vendors">
            <BiStoreAlt /> Events
          </a>
          <a href="/admin/reviews">
            <AiOutlineStar /> Website Reviews
          </a>
        </div>
      </div>
      <div className="bottomLogout">
        <p
          onClick={() => {
            auth.signOut().then(() => {
              document.location.href = "/";
            });
          }}
        >
          Logout
        </p>
      </div>
    </div>
  );
}

export default AdminNav;
