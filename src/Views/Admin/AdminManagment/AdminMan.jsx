import React from "react";
import { auth, db } from "../../../firebase";
import "./AdminMan.css";

function AdminMan() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setItems([]);
    await db
      .collection("Users")
      .where("isVendor", "==", false)
      .limit(15)
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

  //TODO: Add to table
  const GetNext = async () => {
    let last = items[items.length - 1];
    await db
      .collection("Users")
      .where("isVendor", "==", false)
      .startAfter(last.id)
      .limit(15)
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          let item = [];
          snapshot.forEach((doc) => {
            let data = Object.assign({ id: doc.id }, doc.data());
            item.push(data);
          });
        }
      });
  };

  return (
    <div className="AdminUsers">
      {/* <div className="topBar">
        <h1 className="titleUsers">Users</h1>
      </div> */}
      <table className="UsersTable">
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

export default AdminMan;
