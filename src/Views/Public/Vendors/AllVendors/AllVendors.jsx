import React from "react";
import "./AllVendors.css";
import { db } from "../../../../firebase";

function AllVendors() {
  const [vendors, setVendors] = React.useState([]);

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
      <div className="AllVendorHero">
        <div className="AllVendorImage">
          <div className="AllVendorText">
            <h1>
              Find your perfect match and cover every detail of your event
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="AllVendorsTop">
          <div className="AllVendorTitle">
            <h1>Vendors & Value Providers</h1>
            <p>Everyone and everything you need in one place</p>
          </div>
        </div>
        <div className="AllVendorsBottom">
          <p>{vendors.length} total vendors</p>
          <div className="FilterSelectors">
            <select name="city" className="AllVendorsSelector">
              <option value="beirut">Beirut</option>
              <option value="tripoli">Tripoli</option>
              <option value="saida">Saida</option>
            </select>
            <select name="city" className="AllVendorsSelector">
              <option value="beirut">Beirut</option>
              <option value="tripoli">Tripoli</option>
              <option value="saida">Saida</option>
            </select>
            <select name="city" className="AllVendorsSelector">
              <option value="beirut">Beirut</option>
              <option value="tripoli">Tripoli</option>
              <option value="saida">Saida</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllVendors;
