import React from "react";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
