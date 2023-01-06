import { auth, db } from "../firebase";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTrue, setFalse } from "../Redux/reducers/loadingSlice";

function AdminRoute({ children }) {
  const [loading, setLoading] = React.useState(true);
  const [admin, setIsAdmin] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setTrue());
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("Users")
          .doc(auth.currentUser?.uid)
          .get()
          .then((doc) => {
            if (!doc.data().isAdmin) {
              setIsAdmin(false);
            }
            setLoading(false);
          });
      }
    });
    dispatch(setFalse());
  });

  if (!loading) {
    return !admin ? <Navigate to="/" /> : <Outlet />;
  }
}

export { AdminRoute };
