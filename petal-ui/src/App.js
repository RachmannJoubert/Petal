import React, { useState } from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PlantDetail from "./components/PlantDetail";
import SearchPage from "./pages/SearchPage";
import Home from "./components/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState({});
  const [plant, setPlant] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/plantdetail" element={<PlantDetail plant={plant} />} />
          <Route path="/home" element={<Dashboard user={user} />} />
          <Route
            path="/searchresults"
            element={<SearchPage setPlant={setPlant} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
