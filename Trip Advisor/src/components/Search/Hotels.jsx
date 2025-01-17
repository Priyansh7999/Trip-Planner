import React, { useState } from "react";

const Hotels = () => {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);

  return (
    <div className="fields-container">
      <div className="field">
        <label className="field-label">City, Property Name or Location</label>
        <input type="text" className="field-inputs" placeholder="Enter location" />
      </div>

      <div className="field-row">
        <div className="field">
          <label className="field-label">Check-In</label>
          <input type="date" className="field-input" />
        </div>
        <div className="field">
          <label className="field-label">Check-Out</label>
          <input type="date" className="field-input" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label className="field-label">Rooms</label>
          <select
            className="dropdown"
            value={rooms}
            onChange={(e) => setRooms(parseInt(e.target.value))}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Room{ i + 1 > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label className="field-label">Adults</label>
          <select
            className="dropdown"
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value))}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Adult{ i + 1 > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="search-button">SEARCH</button>
    </div>
  );
};

export default Hotels;
