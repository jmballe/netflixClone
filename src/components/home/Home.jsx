import React from "react";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import styles from "./Home.module.css";
import Separator from "../separator/Separator";
import Carousel from "../carousel/Carousel";
import Card from "../card/Card";
import { apiEntityOptions } from "../../apiConfig.js";
import useApi from "../../hooks/useApi";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Banner/>
      {/* <Separator height={"40px"} /> */}
      <Carousel
        entity={apiEntityOptions.popularMovies}
        title={"Popular"}
      />
      <Separator height={"40px"} />
      <Carousel
        entity={apiEntityOptions.topRatedMovies}
        title="Peliculas mejor puntuadas"
      />
      {/* <Separator height={"40px"} />
      <Carousel entity={apiEntityOptions.popularTv} title="Series populares" />
      <Separator height={"40px"} />
      <Carousel entity={apiEntityOptions.topRatedTv} title="Series mejor puntuadas" /> */}
    </div>
  );
};

export default Home;
