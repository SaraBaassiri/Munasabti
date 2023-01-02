import React from "react";
import { useParams } from "react-router-dom";
import "./InnerVendor.css";
import { db } from "../../../../firebase";
import { Grid, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

function InnerVendor() {
  const { id } = useParams();
  const [vendors, setVendors] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setVendors([]);
    await db
      .collection("Users")
      .where("isVendor", "==", true)
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          let item = [];
          snapshot.forEach((doc) => {
            let data = Object.assign({ id: doc.id }, doc.data());
            item.push(data);
          });
          setVendors(item);
        }
      });
  };

  return (
    <div>
      <div className="InnerVendorHero">
        <div className="InnerVendorImage">
          <div className="InnerVendorText">
            <h1>{id}</h1>
          </div>
          <input type="text" placeholder="text here..." />
        </div>
      </div>
      <div className="InnerVendorsBottom">
        <p>{vendors.length} total vendors</p>
        <div className="FilterSelectors">
          <select name="city" className="AllVendorsSelector">
            <option selected hidden>
              City
            </option>
            <option value="beirut">Beirut</option>
            <option value="tripoli">Tripoli</option>
            <option value="saida">Saida</option>
          </select>
          <select name="city" className="AllVendorsSelector">
            <option selected hidden>
              Sort by
            </option>
            <option value="beirut">Beirut</option>
            <option value="tripoli">Tripoli</option>
            <option value="saida">Saida</option>
          </select>
          <input
            placeholder="Availability"
            type={"text"}
            onFocus={(e) => (e.target.type = "date")}
            className="AllVendorsSelector"
          />
        </div>
      </div>
      <div className="AllVendorGridOuter">
        <Grid
          container
          justifyContent={{ xs: "center" }}
          spacing={{ xs: 2, md: 2.5 }}
          columns={{ xs: 2, sm: 8, md: 9 }}
        >
          {Array.from(Array(9)).map((item, index) => (
            <Grid item xs={2} sm={3} md={3} key={index}>
              <div
                className="AllVendorGrid"
                onClick={() => {
                  navigate("/vendor/" + index);
                }}
              >
                <img src="/images/vendorFiller.png" alt="" />
                <div>
                  <h2>thingy {index}</h2>
                  <p>Location</p>
                  <div className="InnerAllVendorGrid">
                    <Rating
                      size="small"
                      name="read-only"
                      value={0}
                      precision={0.5}
                      readOnly
                      className="RatingVendor"
                    />
                    <p>{index} reviews</p>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default InnerVendor;
