import React from "react";
import { db } from "../../../firebase";
import "./AdminMan.css";

function AdminMan() {
  const [items, setItems] = React.useState([]);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setItems([]);
    await db
      .collection("Users")
      .where("isAdmin", "==", true)
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

  const MakeAdmin = async () => {
    await db
      .collection("Users")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          snapshot.forEach((doc) => {
            db.collection("Users").doc(doc.id).update({
              isAdmin: true,
            });
          });
        }
      });
    setEmail("");
  };

  return (
    <div className="AdminMangment">
      <div>
        <h3>Add an Admin</h3>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button onClick={MakeAdmin}>Add</button>
      </div>
      <table className="AdminTable">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Remove</th>
          </tr>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.Gender === "" ? "Unspecified" : item.Gender}</td>
                <td>
                  <button
                    onClick={() => {
                      db.collection("Users")
                        .doc(item.id)
                        .update({
                          isAdmin: false,
                        })
                        .then(() => {
                          let temp = items.filter((i) => i.id !== item.id);
                          setItems(temp);
                        });
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminMan;
