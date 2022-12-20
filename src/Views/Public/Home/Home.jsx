import React from "react";
// import { auth } from "../../../firebase";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  // const userAuthData = useSelector((state) => state.user.data);

  React.useEffect(() => {
    document.title = "Munasabti | Home";
  });

  return (
    <div>
      <div className="Hero">
        <div className="Hero-image">
          <div className="hero-text">
            <h1>
              Find exactly what you’re looking for or check out what’s out
              there! Your go-to platform for a memorable event experience.
            </h1>
          </div>
        </div>
      </div>
      
      <div className="FindProv">
        <div className="FindProv-text">
          <h1>Find Your Provider</h1>
          <p>
            Browse our unique selection of venues and value providers near you
          </p>
          <input type="text" placeholder="Search for vendors..."/>
        </div>
      </div>

      {/* {auth.currentUser && (
        <>
          <h2>{userAuthData.email}</h2>
          <h2>{auth.currentUser.email}</h2>
          <Link to="/admin">Admin</Link>
          <br />
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </>
      )} */}
    </div>
  );
}
