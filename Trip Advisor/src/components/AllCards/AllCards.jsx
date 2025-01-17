import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllCards = ({ places }) => {
  const navigate = useNavigate();
  return (
    <div className="where-to-content">
      <div className="place-cards-grid">
        {places.map((place, index) => (
          <div className="place-card" key={index}>
            <img className="place-card-image" src={place.img} alt={place.name} />
            <div className="place-card-content">
              <h2 className="place-card-name">
                <span className="place-card-number">{index + 1}</span>{place.name}
              </h2>
              <p className="place-card-description">{place.description}</p>
            </div>
            <div className="place-card-footer">
              <hr style={{ opacity: '0.3' }} />
              <br />
              <button
                className="explore-button"
                onClick={() => navigate(`/plan-trip/${place.name}`, {
                  state: {
                    someProp: {
                      img: place.img,
                      name: place.name,
                      description: place.description
                    }
                  }
                })}
              >
                <span className="explore-button-bg"></span>
                <span className="explore-button-text">Explore</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
