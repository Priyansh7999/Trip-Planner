import React, { useState } from "react";

const Train = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [trainClass, setTrainClass] = useState("All Class");

  const classOptions = [
    "All Class",
    "Sleeper Class",
    "Third AC",
    "Second AC",
    "First AC",
    "Second Seating",
    "Vistadome AC",
    "AC Chair Car",
    "First Class",
    "Third AC Economy",
  ];

  return (
    <div className="train-container">
      <div className="train-field">
        <label className="field-label">From</label>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Enter departure station"
          className="field-input"
        />
      </div>
      <div className="train-field">
        <label className="field-label">To</label>
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Enter destination station"
          className="field-input"
        />
      </div>

      <div className="train-field">
        <label className="field-label">Travel Date</label>
        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          className="field-input"
        />
      </div>
      <div className="train-field">
        <label className="field-label">Class</label>
        <select
          value={trainClass}
          onChange={(e) => setTrainClass(e.target.value)}
          className="dropdown"
        >
          {classOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="search-button-container">
        <button className="search-button">SEARCH</button>
      </div>
    </div>
  );
};

export default Train;
