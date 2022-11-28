import React from "react";
import "./Dashboard.css";
import { auth, db } from "../../../firebase";

function Dashboard() {
  const [users, setUsers] = React.useState(0);
  const [vendors, setVendors] = React.useState(0);
  const [reviews, setReviews] = React.useState(0);
  const [events, setEvents] = React.useState(0);

  React.useEffect(() => {
    db.collection("Users")
      .get()
      .then((doc) => {
        setUsers(doc.size);
      });

    db.collection("Vendors")
      .get()
      .then((doc) => {
        setVendors(doc.size);
      });

    db.collection("Reviews")
      .get()
      .then((doc) => {
        setReviews(doc.size);
      });

    db.collection("Events")
      .get()
      .then((doc) => {
        setEvents(doc.size);
      });
  }, []);

  return (
    <div className="AdminDash">
      <div className="topBar">
        <h1 className="titleDash">Dashboard</h1>
      </div>
      <div className="firstRow">
        <div className="firstRowItem">
          <h2>Users</h2>
          <p>{users}</p>
        </div>
        <div className="firstRowItem">
          <h2>Vendors</h2>
          <p>{vendors}</p>
        </div>
        <div className="firstRowItem">
          <h2>Reviews</h2>
          <p>{reviews}</p>
        </div>
        <div className="firstRowItem">
          <h2>Events</h2>
          <p>{events}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
