import React from "react";
import { Routes, Route } from "react-router-dom";
import { auth, db } from "./firebase";

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setFalse, setTrue } from "./Redux/reducers/loadingSlice";
import { setLoggedIn, setData } from "./Redux/reducers/userSlice";

//Pages   
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
import { AdminRoute } from "./utils/AdminRoute";
import Loading from "./Components/Loading";
import VendorAdmin from "./Views/Admin/Vendors/VendorsAdmin";
import Reviews from "./Views/Admin/Reviews/Reviews";
import Events from "./Views/Admin/Events/Events";
import { AuthRoute } from "./utils/AuthRoute";

export default function App() {
  const [user, setUser] = React.useState(false);
  const loading = useSelector((state) => state.loading.value);
  const userAuth = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (document.location.pathname === "/") {
      dispatch(setTrue());
    }
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(true);
        dispatch(setLoggedIn());
        db.collection("Users").doc(user.uid).onSnapshot((doc) => {
          dispatch(setData(doc.data()));
        });
      } else {
        dispatch(setLoggedIn());
      }
      dispatch(setFalse());
    });
  }, [
    dispatch,
  ]);

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <div className="App">
            <Routes>
              <Route index
                element={<Home />} />
              <Route path="/about"
                element={<About />} />

              {
                !userAuth &&
                <Route>
                  <Route index path="/auth/register" element={<Register />} />
                  <Route index path="/auth/login" element={<Login />} />
                </Route>
              }


              {/* Admin Path */}
              <Route path="/admin" exact
                element={
                  <Admin children={<AdminRoute />} />
                }>
                <Route index element={<Dashboard />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/vendors" element={<VendorAdmin />} />
                <Route path="/admin/events" element={<Events />} />
                <Route path="/admin/reviews" element={<Reviews />} />
              </Route>

              <Route path="/vendor" element={<AuthRoute />}>
                <Route index element={<Vendor children={<VendorDashboard />} />} />
              </Route>

              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        )
      }
    </>
  );
};