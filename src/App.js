import React from "react";
import { Routes, Route } from "react-router-dom";
import { auth, db } from "./firebase";
import Admin from "./Views/Admin/Admin";
import Dashboard from "./Views/Admin/Dashboard/Dashboard";
import Users from "./Views/Admin/Users/Users";
import About from "./Views/Client/About Us/About";
import Home from "./Views/Client/Home/Home";
import NoMatch from "./Views/NoMatch/NoMatch";
import Vendor from "./Views/Vendor/Vendor";
import VendorDashboard from "./Views/Vendor/Dashboard/VendorDashboard";
import Register from "./Views/Auth/Register/Register";
import Login from "./Views/Auth/Login/Login";

export default function App() {
  const [isUser, SetisUser] = React.useState(false);
  const [user, SetUser] = React.useState({});

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        SetisUser(true);
        GetUser(user.uid);
      } else {
        SetisUser(false);
      }
    });
  }, []);


  const GetUser = (uid) => {
    db.collection("Users").doc(uid).onSnapshot((doc) => {
      SetUser(doc.data());
    });
  };

  return (
    <div className="App">
      <Routes>
        <Route index
          element={<Home />} />
        <Route path="/about"
          element={<About />} />

        {
          isUser &&
            user.isAdmin ?
            <>
              <Route path="/admin">
                <Route index element={<Admin children={<Dashboard />} />} />
                <Route path="/admin/users" element={<Admin children={<Users />} />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </>
            :
            <></>
        }
        {
          !isUser &&
          <Route>
            <Route index path="/auth/register" element={<Register />} />
            <Route index path="/auth/login" element={<Login />} />
          </Route>
        }
        <Route path="/vendor">
          <Route index element={<Vendor children={<VendorDashboard />} />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}