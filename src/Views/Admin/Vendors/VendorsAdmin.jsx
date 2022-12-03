import React from "react";
import { db } from "../../../firebase";

function VendorAdmin() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setItems([]);
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
          setItems(item);
        }
      });
  };

  return (
    <div className="AdminVendor">
      <div className="TopBarVendor">
        <h1 className="titleVendor">Vendors</h1>
      </div>
      <table className="VendorTable">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.Gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default VendorAdmin;
