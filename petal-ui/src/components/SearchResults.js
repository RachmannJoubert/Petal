import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ setPlant }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log("Button clicked!");
    setPlant({
      name: "Daisy",
      description:
        "Daisies are characterized by the star-shaped flower head, consisting of a densely packed cluster of numerous, small, individual flowers (florets). Both of these species have a center composed of yellow disc florets surrounded by ray florets with long, white petals.",
      plantCare: "",
    });
    navigate("/plantdetail");
  };

  return (
    <div>
      <h1>Search Results</h1>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default SearchResults;
