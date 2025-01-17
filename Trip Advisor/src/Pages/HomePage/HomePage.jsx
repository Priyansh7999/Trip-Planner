import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import bgg from "../../assets/bgg.mp4";
import "./HomePage.css";
import Trending from "../../components/Trending/Trending";
import BelowHeroSeaction from "../../components/BelowHeroSeaction/BelowHeroSeaction";
import TravelGrid from "../../components/TravelGrid/TravelGrid";
import Stack from "../../components/WhatToSEE/Example"
import LesserKnown from "../../components/LesserKnown/LesserKnown";
import CollectionByMonth from "../../components/CollectionByMonth/CollectionByMonth";
import WhatToSee from "../../components/WhatToSEE/WhatToSee"
export default function HomePage() {
  return (
    <>
      <div className="HomePage">
        <div className="video-background">
          <video src={bgg} autoPlay loop muted />
          <div className="overlay"></div>
        </div>
        <div className="Navbar">
          <NavBar />
        </div>
        <div className="Hero">
          <HeroSection />
        </div>
        <div className="BelowHero">
          <BelowHeroSeaction />
          {/* <WhatToSee /> */}
        </div> 
        <TravelGrid />
          <div className="Stacks">
          {/* <Stack /> */}
          <WhatToSee />
        </div>
        <div className="Trending">
          <Trending />
        </div>
        <div className="LesserKnown">
            <LesserKnown />
        </div>
        <div className="Collections-by-month">
              <CollectionByMonth />
        </div>
      </div>
    </>
  );
}

