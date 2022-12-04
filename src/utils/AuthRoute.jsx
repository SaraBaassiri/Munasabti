import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { auth } from "../firebase";

export { AuthRoute };

function AuthRoute({ children }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (auth.currentUser) {
        setLoading(false);
      }
    });
  }, []);

  if (!loading) {
    return auth.currentUser ? <Outlet /> : <Navigate to="/auth/login" />;
  }
}
