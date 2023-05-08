import React, { useState } from "react";
import "./styles/app.css";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";

function App() {
  const [currentForm, setCurrentForm] = useState("signin");

  const toggleForm = (formName) => {
    console.log(formName);
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {currentForm === "signin" ? (
        <SignIn onFormSwitch={toggleForm} />
      ) : (
        <SignUp onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
