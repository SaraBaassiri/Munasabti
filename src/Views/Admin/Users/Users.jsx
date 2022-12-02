import React from "react";
import { auth, db } from "../../../firebase";

function Users() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setItems([]);
    await db
      .collection("Users")
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
    <div className="AdminUsers">
      <div className="topBar">
        <h1 className="titleUsers">Users</h1>
      </div>
      <table className="UsersTable">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
          </tr>
        </tbody>
      </table>
      {items.map((item) => {
        return (
          <div>
            <h1>{item.email}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
