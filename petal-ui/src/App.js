import React, { useState } from "react";
import "./styles/app.css";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import SearchResults from "./components/SearchResults";

function App() {
  const [currentForm, setCurrentForm] = useState("signin");

  const toggleForm = (formName) => {
    console.log(formName);
    setCurrentForm(formName);
  };

  let page;
  if (currentForm === "signin") {
    page = <SignIn onFormSwitch={toggleForm} />;
  } else if (currentForm === "sign-up") {
    page = <SignUp onFormSwitch={toggleForm} />;
  } else if (currentForm === "searchresults") {
    page = <SearchResults onFormSwitch={toggleForm} />;
  }

  return <div className="App">{page}</div>;
}

export default App;
