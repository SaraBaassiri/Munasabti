import React from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import Admin from "./Views/Admin/Admin";
import Dashboard from "./Views/Admin/Dashboard/Dashboard";
import Users from "./Views/Admin/Users/Users";
import About from "./Views/Client/About Us/About";
import Home from "./Views/Client/Home/Home";
import NoMatch from "./Views/NoMatch/NoMatch";
import Vendor from "./Views/Vendor/Vendor";
import VendorDashboard from "./Views/Vendor/Dashboard/VendorDashboard";

function App() {
  const [isUser, SetisUser] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        SetisUser(true);
      } else {
        SetisUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index
          element={<Home />} />
        <Route path="/about"
          element={<About />} />

        {
          isUser &&
            auth.currentUser.email === "admin@admin.com" ?
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

        <Route path="/vendor">
          <Route index element={<Vendor children={<VendorDashboard />} />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
