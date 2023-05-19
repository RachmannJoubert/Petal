import React, { useState } from "react";
import "../styles/search-results.css";

const SearchResults = () => {
  return (
    <div className="container">
      <div className="search-results-container">
        <img src={require("../styles/back_button.png")} />
        <h3>This is a Plant</h3>
      </div>
      <div className="plantcare-title">
        <h3>Plant Care</h3>
      </div>
      <div className="plant-care-container">
        <ul>
          <li>
            <img src={require("../styles/leaf.png")} />
            Every 3 weeks
          </li>
          <li>
            <img src={require("../styles/sun.png")} />
            Moderate Sunlight
          </li>
          <li>
            <img src={require("../styles/water.png")} />
            Water every 7 days
          </li>
        </ul>
      </div>
      <div className="overview-container">
        <h3>Overview</h3>
        <p>planty plant planty plant plant plant plant plant</p>
        <p>planty plant planty plant plant plant plant plant</p>
        <p>planty plant planty plant plant plant plant plant</p>
        <p>planty plant planty plant plant plant plant plant</p>
      </div>
    </div>
  );
};

export default SearchResults;
