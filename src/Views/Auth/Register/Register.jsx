import React from "react";
import "./Register.css";
import { auth, db } from "../../../firebase";
import { setTrue, setFalse } from "../../../Redux/reducers/loadingSlice";
import { setData } from "../../../Redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const provider = new GoogleAuthProvider();

  React.useEffect(() => {
    document.title = "Munasabti | Register";
  }, []);
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(setTrue());
    if (password === confirmPassword) {
      const data = Object.assign({
        email: email,
        name: name,
        isAdmin: false,
        isVendor: false,
      });
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          db.collection("Users")
            .doc(auth.user.uid)
            .set({
              email: email,
              name: name,
              isAdmin: false,
              isVendor: false,
              Description: "",
              Location: "",
              Phone: "",
              About: "",
              Socials: {
                Instagram: "",
                Website: "",
              },
              VerifiedVendor: false,
              VendorDetails: {
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
              },
            })
            .then(() => {
              dispatch(setData(data));
              dispatch(setFalse());
              navigate("/");
            })
            .catch((e) => {
              dispatch(setFalse());
              alert(e.message);
            });
        })
        .catch((e) => {
          dispatch(setFalse());
          alert(e.message);
        });
    } else {
      dispatch(setFalse());
      alert("Passwords do not match");
    }
  };

  const handleRegisterWithGoogle = () => {
    auth.signInWithPopup(provider).then((result) => {
      const data = Object.assign({
        email: result.user.email,
        name: result.user.displayName,
        isAdmin: false,
        isVendor: false,
      });

      db.collection("Users")
        .doc(result.user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            dispatch(setData(data));
            navigate("/");
          } else {
            db.collection("Users")
              .doc(result.user.uid)
              .set({
                email: result.user.email,
                name: result.user.displayName,
                isAdmin: false,
                isVendor: false,
                Description: "",
                Location: "",
                Phone: "",
                About: "",
                Socials: {
                  Instagram: "",
                  Website: "",
                },
                VerifiedVendor: false,
              })
              .then(() => {
                dispatch(setData(data));
                navigate("/");
              })
              .catch((e) => {
                alert(e.message);
              });
          }
        })
        .catch((e) => {
          console.log(e.message);
        });
    });
  };

  return (
    <div>
      <div className="regContainer">
        <h2 className="header">Temp Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Enter email..."
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter first name..."
            id="Fname"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter last name..."
            id="Lname"
            onChange={(e) => setName(`${name} ${e.target.value}`)}
          />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            id="pass"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm password"
            id="conPass"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <button id="btn">Register</button>
        </form>

        <div onClick={handleRegisterWithGoogle}>
          <p>Sign Up with google</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
