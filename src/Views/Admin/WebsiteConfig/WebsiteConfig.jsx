import React from "react";
import { db } from "../../../firebase";

function WebsiteConfig() {
  const [data, setData] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  React.useEffect(() => {
    db.collection("Config")
      .doc("Text")
      .get()
      .then((doc) => {
        console.log(doc.data());
        setData(doc.data());
        setEmail(doc.data().Email);
        setPhone(doc.data().PhoneNumber);
      });
  }, []);

  const save = () => {
    db.collection("Config")
      .doc("Text")
      .set(
        {
          Email: email,
          PhoneNumber: phone,
        },
        { merge: true }
      )
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <h1>Website Config</h1>
      <label>Email</label>
      <input
        type="text"
        placeholder="Display Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <label>Phone Number</label>
      <input
        type="text"
        placeholder="Display Number"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <button onClick={save}>
        <i className="fas fa-save"></i> Save
      </button>
    </div>
  );
}

export default WebsiteConfig;
