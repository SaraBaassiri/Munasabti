import React from "react";
import "./Dashboard.css";
import { auth, db } from "../../../firebase";
// import { useDispatch } from "react-redux";
// import { setFalse, setTrue } from "../../../Redux/reducers/loadingSlice";

function Dashboard() {
  const [users, setUsers] = React.useState(0);
  const [vendors, setVendors] = React.useState(0);
  const [reviews, setReviews] = React.useState(0);
  const [events, setEvents] = React.useState(0);
  // const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      const users = await db.collection("Users").get();
      setUsers(users.size);

      const vendors = await db
        .collection("Users")
        .where("isVendor", "==", true)
        .get();
      setVendors(vendors.size);

      const reviews = await db.collection("reviews").get();
      setReviews(reviews.size);

      const events = await db.collection("events").get();
      setEvents(events.size);
    })();
  });

  return (
    <div className="AdminDash">
      <div className="main__container">
        <div className="main__title">
          <div className="main__greeting">
            <h1>
              Hello {auth.currentUser.displayName &&
                auth.currentUser.displayName.split(" ")[0]},

            </h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
            <i className="fa fa-user"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Users</p>
              <span className="font-bold text-title">{users}</span>
            </div>
          </div>

          <div className="card">
            <i class="fa-solid fa-building"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Vendors</p>
              <span className="font-bold text-title">{vendors}</span>
            </div>
          </div>

          <div className="card">
            <i class="fa-solid fa-calendar-days"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Events</p>
              <span className="font-bold text-title">{events}</span>
            </div>
          </div>

          <div className="card">
            <i class="fa-solid fa-heart"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Reviews</p>
              <span className="font-bold text-title">{reviews}</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
            </div>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
