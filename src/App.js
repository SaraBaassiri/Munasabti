import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Home from "./Views/Public/Home/Home";
import Public from "./Views/Public/Public";
import NoMatch from "./Views/NoMatch/NoMatch";
import Register from "./Views/Auth/Register/Register";
import Login from "./Views/Auth/Login/Login";
import Loading from "./Components/Loading";

//Vendor Pages
import Vendor from "./Views/Vendor/Vendor";
import VendorDashboard from "./Views/Vendor/Dashboard/VendorDashboard";
import Vendors from "./Views/Public/Vendors/Vendors";
import InnerVendor from "./Views/Public/Vendors/InnerVendor/InnerVendor";
import SpecificVendor from "./Views/Public/Vendors/SpecificVendor/SpecificVendor";
import AllVendors from "./Views/Public/Vendors/AllVendors/AllVendors";
import AdminMan from "./Views/Admin/AdminManagment/AdminMan";
import { AnimatePresence } from "framer-motion";
import WebsiteConfig from "./Views/Admin/WebsiteConfig/WebsiteConfig";

//Inspirations
import Inspirations from "./Views/Public/Inspirations/Inspirations";
import EditImages from "./Views/Admin/EditImages/EditImages";
import { VendorRoute } from "./utils/VendorRoute";

export default function App() {
  const loading = useSelector((state) => state.loading.value);
  const userAuth = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const location = useLocation();

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

      //Stop the loading since we dont need it anymore
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
            {/* <AnimatePresence> */}
            <Routes key={location.pathname} location={location}>

              {/* Public Routes */}

              <Route>
                <Route path="/"
                  element={<Public children={<Home />} />} />
                <Route path="/vendors"
                  element={<Public children={<Vendors />} />} />
                <Route path="/our-vendors"
                  element={<Public children={<AllVendors />} />} />
                <Route path="/vendors/:id"
                  element={<Public children={<InnerVendor />} />} />
                <Route path="/vendor/:id"
                  element={<Public children={<SpecificVendor />} />} />
                <Route path="/inspirations"
                  element={<Public children={<Inspirations />} />} />
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
                <Route path="/admin/vendors" element={<Admin children={<VendorAdmin />} />} />
                <Route path="/admin/events" element={<Admin children={<Events />} />} />
                <Route path="/admin/reviews" element={<Admin children={<Reviews />} />} />
                <Route path="/admin/managment" element={<Admin children={<AdminMan />} />} />
                <Route path="/admin/website-config" element={<Admin children={<WebsiteConfig />} />} />
                <Route path="/admin/edit-images" element={<Admin children={<EditImages />} />} />

              </Route>

              {/* Vendor Routes */}
              <Route path="/vendor" element={<VendorRoute />}>
                <Route index element={<Vendor children={<VendorDashboard />} />} />
              </Route>

              {/* If no match is found */}
              <Route path="*" element={<NoMatch />} />
            </Routes>
            {/* </AnimatePresence> */}
          </div>
        )
      }
    </>
  );
};