import React, { useState } from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PlantDetail from "./components/PlantDetail";

import Home from "./components/Home";
import SearchResults from "./components/SearchResults";

function App() {
  const [user, setUser] = useState({});
  const [plant, setPlant] = useState(null);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/plantdetail"
            element={<PlantDetail plantId={plant} />}
          />
          <Route path="/home" element={<Home setPlant={setPlant} />} />
          <Route
            path="/searchresults"
            element={<SearchResults setPlant={setPlant} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
