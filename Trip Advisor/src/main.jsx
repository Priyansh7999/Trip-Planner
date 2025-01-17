import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './Pages/HomePage/HomePage';
import HeroSection from './components/HeroSection/HeroSection';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Search from "./components/Search/Search";
import Trending from './components/Trending/Trending';
import AddCityDetails from './Pages/AddCityDetails/AddCityDetails';
import AllCityList from './Pages/AllCityList/AllCityList';
import SelectedCity from './Pages/SelectedCity/SelectedCity';
import PlanTrip from './Pages/PlanTrip/PlaneTrip';
import Layout from './Layout';  
import PlanTripSelected from './Pages/PlanTripSelected/PlanTripSelected';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/hero" element={<HeroSection />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/slider" element={<ImageSlider />} />
                    <Route path="/focus" element={<Trending />} />
                    <Route path="/all-city" element={<AllCityList trending="trendingcity" />} />
                    <Route path="/all-place" element={<AllCityList trending="trendingplace" />} />
                    <Route path="/add-city" element={<AddCityDetails />} />
                    <Route path="/city/:cityName" element={<SelectedCity />} />
                    <Route path="/plantrip" element={<PlanTrip />} />
                    <Route path="/plan-trip/:placeName" element={<PlanTripSelected />} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
