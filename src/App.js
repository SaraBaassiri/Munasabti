import { Routes, Route } from "react-router-dom";
import About from "./Views/About Us/About";
import Home from "./Views/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"
          element={<Home/>}/>
        <Route path="/About"
          element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
