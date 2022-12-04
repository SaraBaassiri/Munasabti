import React from "react";
import { auth } from "../../../firebase";
import { useSelector } from "react-redux";

export default function Home() {
  const userAuthData = useSelector((state) => state.user.data);

  React.useEffect(() => {
    document.title = "Munasabti - Home";
  });

  return (
    <div>
      {auth.currentUser && (
        <>
          <h1>{userAuthData.email}</h1>
          <h2>{auth.currentUser.email}</h2>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </>
      )}
    </div>
  );
}
