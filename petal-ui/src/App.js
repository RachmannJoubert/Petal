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
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/plantdetail" element={<PlantDetail />} />
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/searchresults" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
