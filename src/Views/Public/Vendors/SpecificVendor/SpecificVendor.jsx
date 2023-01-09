import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebase";
import { useNavigate } from "react-router-dom";
import "./SpecificVendor.css";

import "react-datepicker/dist/react-datepicker.css";
import Details from "./SpecficInner/Detais";
import SpecificPhotos from "./SpecficInner/SpecificPhotos";
import SpecificVideos from "./SpecficInner/SpecificVideos";
import SpecificReviews from "./SpecficInner/SpecificReviews";
import SpecificMap from "./SpecficInner/SpecificMap";

function SpecificVendor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [display, setDisplay] = React.useState("About");
  const [vendor, setVendor] = React.useState({});
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
          <button
            onClick={() => {
              setDisplay("About");
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              setDisplay("Photos");
            }}
          >
            Photos
          </button>
          <button
            onClick={() => {
              setDisplay("Videos");
            }}
          >
            Videos
          </button>
          <button
            onClick={() => {
              setDisplay("Reviews");
            }}
          >
            Reviews
          </button>
          <button
            onClick={() => {
              setDisplay("Map");
            }}
          >
            Map
          </button>
        </div>
      </div>

      <div>
        {display === "About" ? (
          <Details />
        ) : display === "Photos" ? (
          <SpecificPhotos />
        ) : display === "Videos" ? (
          <SpecificVideos />
        ) : display === "Reviews" ? (
          <SpecificReviews />
        ) : (
          display === "Map" && <SpecificMap />
        )}
      </div>
    </div>
  );
}

export default SpecificVendor;
