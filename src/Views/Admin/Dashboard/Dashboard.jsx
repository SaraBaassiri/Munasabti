import React from "react";
import "./Dashboard.css";
import { auth, db } from "../../../firebase";

function Dashboard() {
  const [users, setUsers] = React.useState(0);
  const [vendors, setVendors] = React.useState(0);
  const [reviews, setReviews] = React.useState(0);
  const [events, setEvents] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      const users = await db.collection("Users").get();
      setUsers(users.size);

      const vendors = await db.collection("vendors").get();
      setVendors(vendors.size);

      const reviews = await db.collection("reviews").get();
      setReviews(reviews.size);

      const events = await db.collection("events").get();
      setEvents(events.size);
    })();
  }, []);

  return (
    <div className="AdminDash">
      <div className="topBar">
        <h1 className="titleDash">Dashboard</h1>
      </div>
      <div className="firstRow">
        <div className="firstRowItem">
          <h3>Users</h3>
          <p>{users}</p>
        </div>
        <div className="firstRowItem">
          <h3>Vendors</h3>
          <p>{vendors}</p>
        </div>
        <div className="firstRowItem">
          <h3>Reviews</h3>
          <p>{reviews}</p>
        </div>
        <div className="firstRowItem">
          <h3>Events</h3>
          <p>{events}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
