import React from "react";
import { Routes, Route } from "react-router-dom";
import { auth, db } from "./firebase";

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setFalse, setTrue } from "./Redux/reducers/loadingSlice";
import { setLoggedIn, setData } from "./Redux/reducers/userSlice";

//Routes
import { AdminRoute } from "./utils/AdminRoute";
import { AuthRoute } from "./utils/AuthRoute";

//Admin Pages
import Admin from "./Views/Admin/Admin";
import Dashboard from "./Views/Admin/Dashboard/Dashboard";
import Users from "./Views/Admin/Users/Users";
import VendorAdmin from "./Views/Admin/Vendors/VendorsAdmin";
import Reviews from "./Views/Admin/Reviews/Reviews";
import Events from "./Views/Admin/Events/Events";

//Public Pages & components
import About from "./Views/Public/About Us/About";
import Home from "./Views/Public/Home/Home";
import Public from "./Views/Public/Public";
import NoMatch from "./Views/NoMatch/NoMatch";
import Register from "./Views/Auth/Register/Register";
import Login from "./Views/Auth/Login/Login";
import Loading from "./Components/Loading";

//Vendor Pages
import Vendor from "./Views/Vendor/Vendor";
import VendorDashboard from "./Views/Vendor/Dashboard/VendorDashboard";

export default function App() {
  const loading = useSelector((state) => state.loading.value);
  const userAuth = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (document.location.pathname === "/") {
      dispatch(setTrue());
    }
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setLoggedIn());
        db.collection("Users").doc(user.uid).onSnapshot((doc) => {
          dispatch(setData(doc.data()));
        });
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

              {/* Public Routes */}
              <Route>
                <Route path="/"
                  element={<Public children={<Home />} />} />
                <Route path="/about"
                  element={<Public children={<About />} />} />
              </Route>



              {/* Auth Routes (Only accessible when logged out)*/}
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
                  // <Admin children={<AdminRoute />} />
                  <AdminRoute />
                }>
                <Route index element={<Admin children={<Dashboard />} />} />
                <Route path="/admin/users" element={<Admin children={<Users />} />} />
                <Route path="/admin/vendors" element={<VendorAdmin />} />
                <Route path="/admin/events" element={<Events />} />
                <Route path="/admin/reviews" element={<Reviews />} />
              </Route>

              {/* Vendor Routes */}
              <Route path="/vendor" element={<AuthRoute />}>
                <Route index element={<Vendor children={<VendorDashboard />} />} />
              </Route>


              {/* If no match is found */}
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        )
      }
    </>
  );
};