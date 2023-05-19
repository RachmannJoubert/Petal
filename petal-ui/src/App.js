import React from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SearchResults from "./components/SearchResults";

function App() {
  const toggleForm = (formName) => {
    console.log(formName);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn onFormSwitch={toggleForm} />} />
          <Route
            path="/signup"
            element={<SignUp onFormSwitch={toggleForm} />}
          />
          <Route
            path="/searchresults"
            element={<SearchResults onFormSwitch={toggleForm} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
