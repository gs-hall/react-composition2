import React from "react";

import Ads from "./Components/Ads";
import Logo from "./Components/Logo";
import SearchBar from "./Components/SearchBar";
import Banner from "./Components/Banner";

import Blocks from "./Blocks/Blocks";
import NewsBlock from "./Blocks/NewsBlock";
import WeatherBlock from "./Blocks/WeatherBlock";
import VisitedBlock from "./Blocks/VisitedBlock";
import MapBlock from "./Blocks/MapBlock";
import TvBlock from "./Blocks/TvBlock";
import AirBlock from "./Blocks/AirBlock";

export default function MainPage() {
  return (
    <>
      <NewsBlock />
      <Ads />
      <Logo />
      <SearchBar />
      <Banner />
      <Blocks>
        <WeatherBlock />
        <VisitedBlock />
        <MapBlock />
        <TvBlock />
        <AirBlock />
      </Blocks>
    </>
  );
};