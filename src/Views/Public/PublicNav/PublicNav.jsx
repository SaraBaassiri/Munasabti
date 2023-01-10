import React from "react";
import "./PublicNav.css";
import { auth, db } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiAdminLine } from "react-icons/ri";
import { useSelector } from "react-redux";

export default function PublicNav() {
  const navigate = useNavigate();
  const [admin, setAdmin] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      db.collection("Users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.data().isAdmin) {
            setAdmin(true);
          }
        });
    });
    return unsubscribe;
  });

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
          </Link>
          {admin && (
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
