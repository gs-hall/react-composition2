// Главная страница

import React from "react";

import Ads from "./Components/Ads";
import Logo from "./Components/Logo";
import SearchBar from "./Components/SearchBar";
import Banner from "./Components/Banner";
import Container from "./Components/Container";
import Blocks from "./Components/Blocks";

import "./main.css";

export default function MainPage({data}) {
  return (
    <Container type="page">
      <Logo />
      <Container type="info">
        <Container type="header">
          <Blocks type="actual" blocks={["news", "assets"]} data={data} />
          <Ads />
        </Container>
        <SearchBar />
        <Banner />
        <Blocks type="footer" blocks={["weather", "visited", "map", "tv", "air"]} data={data} />
      </Container>
    </Container>
  );
};