import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./TravelGrid.css";
import Heritage from "../../assets/Heritage.jpg";
import Romantic from "../../assets/Romantic.jpg";
import Foodies from "../../assets/Foodies.jpg";
import Hills from "../../assets/Hills.jpg";
import Beach from "../../assets/Beach.jpg";

const TravelGrid = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const articles = [
    {
      category: "Hills and Mountains",
      title: "Explore Hills and Mountains",
      image: Hills
    },
    {
      category: "Heritage",
      title: "Best Tourist Attractions",
      image: Heritage,
    },
    {
      category: "Foodies",
      title: "Best Food Attractions",
      image: Foodies,
    },
    {
      category: "Beach",
      title: "Best Beach Attractions",
      image: Beach,
    },
    {
      category: "Romantic",
      title: "Best Romantic Attractions",
      image: Romantic,
    },
  ];

  const handleCardClick = (category) => {
    const formattedCategory = category.toLowerCase().replace(/\s+/g, "-"); // Convert to URL-friendly format
    navigate(`/trip-plan/${formattedCategory}`);
  };

  return (
    <>
    <div className="travel-grid-header">
        <h2>PLAN TRIP</h2>
        <p>Discover the most beautiful places to visit, the best things to do, where to stay, and more in India.</p>
    
    <div className="travel-grid">
      {articles.map((article, index) => (
        <div
          key={index}
          className={`travel-card ${index === 0 ? "large" : ""}`}
          style={{ backgroundImage: `url(${article.image})` }}
          onClick={() => handleCardClick(article.category)}
        >
          <div className="travel-card-content">
            <h3>{article.title}</h3>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default TravelGrid;
