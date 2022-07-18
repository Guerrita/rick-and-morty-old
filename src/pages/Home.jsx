import React from "react";
import banner from "../assets/home-banner.png";
import "@styles/Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <figure className="banner">
        <img src={banner} alt="Banner of Rick and Morty" />
      </figure>
      <section className="home-characters-container"></section>
      <section className="home-location-container"></section>
      <section className="home-episodes-container"></section>
    </React.Fragment>
  );
};

export default Home;
