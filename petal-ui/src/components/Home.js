import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({ user }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log("Button clicked!");
    navigate("/searchresults");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Hello {user}</p>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default HomePage;
