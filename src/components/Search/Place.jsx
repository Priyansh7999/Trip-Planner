import React from "react";
import "./SearchComponent.css";
const Place = () => {
  return (
    <div className="place-container">
      <div className="field">
        <label className="field-label">City/Places</label>
        <input
          type="text"
          className="field-input"
          placeholder="Enter location"
        />
      </div>
      <button className="search-button">SEARCH</button>
    </div>
  );
};

export default Place;
