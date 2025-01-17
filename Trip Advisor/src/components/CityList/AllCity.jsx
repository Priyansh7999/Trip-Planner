import React from "react";

export default function AllCity({ cities, trending, navigate }) {
  return (
    <div className="city-cards-grid">
      {cities.length > 0 ? (
        cities.map((city, index) => (
          <div className="city-card" key={index}>
            <img className="city-card-image" src={city.src} alt={city.title} />
            <div className="city-card-content">
              <div className="city-card-header">
                <span className="city-card-number">{index + 1}</span>
                <h2 className="city-card-title">{city.title}</h2>
              </div>
              <p className="city-card-desc">{city.description}</p>
            </div>
            <div className="city-card-footer">
              <hr style={{ opacity: "0.3" }} />
              <br />
              <button
                className="explore-button"
                onClick={() => navigate(`/city/${city.title}`)}
              >
                <span className="explore-button-bg"></span>
                <span className="explore-button-text">Explore</span>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No cities found. Please try again later.</p>
      )}
    </div>
  );
}
