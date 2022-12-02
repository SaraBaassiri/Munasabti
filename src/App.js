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
import { PrivateRoute } from "./utils/PrivateRoute";
import Loading from "./Components/Loading";

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
        db.collection("Users").doc(user.uid).onSnapshot((doc) => {
          dispatch(setData(doc.data()));
        });
        dispatch(setLoggedIn());
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

              {/* Authentication Path */}
              {
                !userAuth &&
                <Route>
                  <Route index path="/auth/register" element={<Register />} />
                  <Route index path="/auth/login" element={<Login />} />
                </Route>
              }

              {/* Admin Path */}
              <Route path="/admin" exact element={<Admin children={<PrivateRoute />} />} >
                <Route index element={
                  <Dashboard />
                } />
                <Route path="/admin/users" element={
                  <Users />
                } />
              </Route>

              <Route path="/vendor">
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