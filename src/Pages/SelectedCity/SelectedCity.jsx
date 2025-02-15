import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SelectedCity.css'; // Assuming you have a CSS file for styling

const SelectedCity = () => {
  const { cityName } = useParams(); // Get the city name from the URL
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch city details from the API on component mount
  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/cities/${cityName}`);
        setCityData(response.data.city); // Assuming the response is in { city: ... }
        setLoading(false);
      } catch (err) {
        setError('Error fetching city data');
        setLoading(false);
      }
    };

    fetchCityData();
  }, [cityName]); // Re-fetch data if the cityName in the URL changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="selected-city-container">
      <h1>{cityData.basicInfo.CityName}</h1>
      <h2>{cityData.basicInfo.CityTitle}</h2>

      <div className="city-overview">
        <h3>Brief Description</h3>
        <p>{cityData.basicInfo.CityBriefDesc}</p>
        
        <h3>Detailed Description</h3>
        <p>{cityData.basicInfo.CityDetailedDesc}</p>
      </div>

      <div className="city-history">
        <h3>History</h3>
        <p>{cityData.history.History}</p>
        <p>Established in: {cityData.history.EstablishedYear}</p>
      </div>

      <div className="city-seasons">
        <h3>Seasons</h3>
        <div className="season">
          <h4>Peak Season</h4>
          <p>From: {cityData.seasons.PeakSeason.from} To: {cityData.seasons.PeakSeason.to}</p>
          <p>What to Expect: {cityData.seasons.PeakSeason.whatToExpect}</p>
          <p>Things You'll Love: {cityData.seasons.PeakSeason.thingsYoullLove}</p>
        </div>
        <div className="season">
          <h4>Moderate Season</h4>
          <p>From: {cityData.seasons.ModerateSeason.from} To: {cityData.seasons.ModerateSeason.to}</p>
          <p>What to Expect: {cityData.seasons.ModerateSeason.whatToExpect}</p>
          <p>Things You'll Love: {cityData.seasons.ModerateSeason.thingsYoullLove}</p>
        </div>
        <div className="season">
          <h4>Off Season</h4>
          <p>From: {cityData.seasons.OffSeason.from} To: {cityData.seasons.OffSeason.to}</p>
          <p>What to Expect: {cityData.seasons.OffSeason.whatToExpect}</p>
          <p>Things You'll Love: {cityData.seasons.OffSeason.thingsYoullLove}</p>
        </div>
      </div>

      <div className="city-geography">
        <h3>Geographical Details</h3>
        <p>Region: {cityData.geographicalDetails.Region}</p>
        <p>Latitude: {cityData.geographicalDetails.Latitude}</p>
        <p>Longitude: {cityData.geographicalDetails.Longitude}</p>
      </div>

      <div className="city-trip">
        <h3>Trip Details</h3>
        <p>Average Trip Length: {cityData.tripDetails.AverageTripLength} days</p>
        <p>Best Time to Visit: {cityData.tripDetails.BestTimeToVisitCity}</p>
        <p>When to Visit: {cityData.tripDetails.WhenToVisitCity}</p>
      </div>

      <div className="city-accessibility">
        <h3>Accessibility</h3>
        <p>By Air: {cityData.accessibility.HowToReach.ByAir}</p>
        <p>By Rail: {cityData.accessibility.HowToReach.ByRail}</p>
        <p>By Road: {cityData.accessibility.HowToReach.ByRoad}</p>
      </div>

      <div className="city-local-events">
        <h3>Local Events</h3>
        {cityData.localEvents.map((event, index) => (
          <div key={index}>
            <h4>{event.FestivalName}</h4>
            <p>{event.Description}</p>
          </div>
        ))}
      </div>

      <div className="city-attractions">
        <h3>City Attractions</h3>
        <p>Famous For: {cityData.attractions.CityIsFamousFor.Name}</p>
        <p>{cityData.attractions.CityIsFamousFor.Desc}</p>
      </div>

      <div className="city-experiences">
        <h3>Things to See and Do</h3>
        <p>{cityData.experiences.ThingsToSeeAndDo}</p>

        <h3>Food to Try</h3>
        {cityData.experiences.FoodToTryInPlacesToVisit.map((food, index) => (
          <div key={index}>
            <img src={food.ImgUrl} alt={food.FoodName} />
            <h4>{food.FoodName}</h4>
            <p>{food.FoodDesc}</p>
          </div>
        ))}
      </div>

      <div className="city-conclusion">
        <h3>Conclusion</h3>
        <p>{cityData.conclusion}</p>
      </div>
    </div>
  );
};

export default SelectedCity;
