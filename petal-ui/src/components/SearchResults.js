import React, { useState } from "react";
import "../styles/search-results.css";

const SearchResults = () => {
  return (
    <div className="container">
      <div className="search-results-container">
        <h3>This is a Plant</h3>
      </div>
      <div className="plantcare-title">
        <h3>Plant Care</h3>
      </div>
      <div className="plant-care-container">
        <ul>
          <li>
            {/* <img src="path_to_image1.jpg" alt="Image */}
            Every 3 weeks
          </li>
          <li>
            {/* <img src="path_to_image1.jpg" alt="Image */}
            Moderate Sunlight
          </li>
          <li>
            {/* <img src="path_to_image1.jpg" alt="Image */}
            Water every 7 days
          </li>
        </ul>
      </div>
      <div className="overview-container">
        <h3>Overview</h3>
        <p>planty plant planty plant</p>
      </div>
    </div>
  );
};

export default SearchResults;
