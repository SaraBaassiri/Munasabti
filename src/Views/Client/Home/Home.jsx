import React from "react";
import { auth } from "../../../firebase";

export default function Home() {
  return (
    <div>
      home
      {auth.currentUser && (
        <>
          <h1>{auth.currentUser.email}</h1>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </>
      )}
    </div>
  );
}
