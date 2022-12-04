import React from "react";
import "./NoMatch.css";

export default function NoMatch() {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <a href="/">Go Home</a>
      </div>
    </div>
  );
}
