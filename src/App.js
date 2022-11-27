import { Routes, Route } from "react-router-dom";
import Admin from "./Views/Admin/Admin";
import Dashboard from "./Views/Admin/Dashboard/Dashboard";
import Users from "./Views/Admin/Users/Users";
import About from "./Views/Client/About Us/About";
import Home from "./Views/Client/Home/Home";
import NoMatch from "./Views/NoMatch/NoMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index
          element={<Home />} />
        <Route path="/about"
          element={<About />} />

        <Route path="/admin">
          <Route index element={<Admin children={<Dashboard />} />} />
          <Route path="/admin/users" element={<Admin children={<Users />} />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
