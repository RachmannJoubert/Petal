import React, { useState } from "react";
import "../styles/plant-detail.css";
import { useNavigate } from "react-router-dom";

const PlantDetail = ({ plant }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="search-results-container">
        <button className="back-btn" onClick={() => navigate("/searchresults")}>
          <img src={require("../styles/back_button.png")} />
        </button>
        <h3>{plant.name}</h3>
        <img src={require("../styles/plant.png")} />
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
        <p>{plant.description}</p>
      </div>
    </div>
  );
};

export default PlantDetail;
