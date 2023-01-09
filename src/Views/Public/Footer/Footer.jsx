import React from "react";
import "./Footer.css";
import Logo from "../../../media/images/logov2.svg";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";

export default function Footer() {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    db.collection("Config")
      .doc("Text")
      .get()
      .then((doc) => {
        setData(doc.data());
      });
  }, []);

  return (
    <div className="Footer">
      <div className="line" />
      <div className="Logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="Links">
        <div>
          <Link to="/">Home</Link>
          <Link to="/">Services</Link>
          <Link to="/vendors">Vendors</Link>
          <Link to="/">Inspirations</Link>
        </div>
      </div>
      <div className="partTwo">
        <a href="/">{data.Email}</a>
        <a href="/">{data.PhoneNumber}</a>
      </div>
      <h6>Copyright {new Date().getFullYear()}</h6>
    </div>
  );
}
