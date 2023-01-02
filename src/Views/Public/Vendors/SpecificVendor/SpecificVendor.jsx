import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebase";
import { useNavigate } from "react-router-dom";

function SpecificVendor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vendor, setVendor] = React.useState({});

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
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
      {id}
      {vendor.Description}
      {vendor.Location}
    </div>
  );
}

export default SpecificVendor;
