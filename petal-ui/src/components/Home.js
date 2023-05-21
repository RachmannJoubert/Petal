import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({ setPlant }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/searchresults");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Hello</p>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default HomePage;
