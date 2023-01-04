import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebase";
import { useNavigate } from "react-router-dom";
import "./SpecificVendor.css";
import {
  BsGlobe2,
  BsTelephone,
  BsInstagram,
  BsHeart,
  BsHeartFill,
  BsShare,
} from "react-icons/bs";
import { Grid } from "@mui/material";

function SpecificVendor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vendor, setVendor] = React.useState({});
  const [isFav, setIsFav] = React.useState(false);
  const [details, setDetails] = React.useState({
    Category: "",
    SubCategory: "",
    Outdoor: false,
    Capacity: 0,
    Catering: false,
    Alcohol: false,
    Parking: false,
    Wifi: false,
    AC: false,
    ReadyForbadWeather: false,
    Smoking: false,
  });

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log(details);

    db.collection("Users")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          if (doc.data().isVendor) {
            setVendor(doc.data());
          } else {
            navigate("/");
          }
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  return (
    <div>
      <div className="rowsImage">
        <div className="imgOne">
          <img src="/images/MB1.png" alt="" />
          <img src="/images/MB2.png" alt="" />
        </div>
        <div className="imgTwo">
          <img src="/images/MB3.png" alt="" />
          <img src="/images/MB4.png" alt="" />
        </div>
        <div className="imgThree">
          <img src="/images/MB5.png" alt="" />
          <img src="/images/MB6.png" alt="" />
        </div>
      </div>
      <div className="nav">
        <div className="navitems">
          <button>About</button>
          <button>Photos</button>
          <button>Videos</button>
          <button>Reviews</button>
          <button>Map</button>
        </div>
      </div>
      <div className="vendorInfo">
        <div className="vendorInfo__left">
          <div className="VendorInfo__left__Inner">
            <div>
              <h3>{vendor.name}</h3>
              <p>{vendor.Location}</p>
            </div>
            <div className="IconsInnerVendorInfo">
              <span
                onClick={() => {
                  setIsFav(!isFav);
                }}
              >
                {isFav ? <BsHeartFill size={"25"} /> : <BsHeart size={"25"} />}
              </span>
              <span
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
              >
                <BsShare size={"25"} />
              </span>
            </div>
          </div>

          <div className="socials">
            <BsInstagram
              size={"25"}
              id="insta"
              onMouseOver={({ target }) => (target.style.color = "#0C3651")}
              onMouseOut={({ target }) => (target.style.color = "#707070")}
            />
            <BsGlobe2
              size={"25"}
              id="web"
              onMouseOver={({ target }) => (target.style.color = "#0C3651")}
              onMouseOut={({ target }) => (target.style.color = "#707070")}
            />
            <BsTelephone
              size={"25"}
              id="phone"
              onMouseOver={({ target }) => (target.style.color = "#0C3651")}
              onMouseOut={({ target }) => (target.style.color = "#707070")}
            />
          </div>
          <div className="lineVendor"></div>
          <h6>About {vendor.name && vendor.name.split(" ")[0]}</h6>
          <p>{vendor.Description}</p>
          <div className="details">
            <h1>Details</h1>
            <div className="InnerRightVendorInfo">
              <Grid container spacing={2} columns={16}>
                {Object.keys(details).map((key) => {
                  return (
                    <Grid item xs={8}>
                      <div className="detailsInner">
                        <p>{key}</p>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </div>
        </div>
        <div className="vendorInfo__right"></div>
      </div>
    </div>
  );
}

export default SpecificVendor;
