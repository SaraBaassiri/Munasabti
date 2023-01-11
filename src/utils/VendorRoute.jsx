import { auth, db } from "../firebase";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTrue, setFalse } from "../Redux/reducers/loadingSlice";

function VendorRoute({ children }) {
  const [loading, setLoading] = React.useState(true);
  const [vendor, setIsVendor] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setTrue());
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("Users")
          .doc(auth.currentUser?.uid)
          .get()
          .then((doc) => {
            if (!doc.data().isVendor) {
              setIsVendor(false);
            }
            setLoading(false);
          });
      }
    });
    dispatch(setFalse());
  });

  if (!loading) {
    return !vendor ? <Navigate to="/" /> : <Outlet />;
  }
}

export { VendorRoute };
