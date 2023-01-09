import React from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../../../../../firebase";
import { useNavigate } from "react-router-dom";
import "../SpecificVendor.css";
import {
  BsGlobe2,
  BsTelephone,
  BsInstagram,
  BsHeart,
  BsHeartFill,
  BsShare,
  BsCheck2,
} from "react-icons/bs";
import { Grid, Rating } from "@mui/material";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Details() {
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

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(null);
  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

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
            document.title = `Munasabti | ${doc.data().name}`;
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
            <Grid container spacing={2} columns={16}>
              {Object.keys(details).map((key) => {
                return (
                  <Grid item xs={8}>
                    <div className="detailsInner">
                      <BsCheck2 size={23} id="checkIcon" />
                      <p>{key}</p>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
        <div className="vendorInfo__right">
          <div className="TopReviewVendor">
            <img src="/images/profile_default.jpg" alt="" />
            <h4>User Name</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              incidunt quasi labore dolorum nobis nesciunt maiores ad voluptate
              explicabo deserunt accusantium accusamus sit voluptates, quos
              cumque, sed repellat quis necessitatibus.
            </p>
            <Rating
              size="medium"
              name="read-only"
              value={4}
              precision={0.5}
              readOnly
            />
            <p>0 Reviews</p>
          </div>
          <div className="RequestVendorSpecific">
            <h2>Request a quote</h2>
            {auth.currentUser && auth.currentUser.emailVerified ? (
              <button>Request</button>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}
          </div>
          <div className="VendorAvailabilitySpecific">
            <h3>Availability</h3>
            <DatePicker
              className="datePickerVendor"
              selected={startDate}
              onChange={onChangeDate}
              startDate={startDate}
              endDate={endDate}
              // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
              selectsRange
              selectsDisabledDaysInRange
              inline
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
