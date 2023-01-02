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
    </div>
  );
}

export default SpecificVendor;
