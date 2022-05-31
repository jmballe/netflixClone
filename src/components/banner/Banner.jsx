import React, { useEffect } from "react";
import { apiEntityOptions } from "../../apiConfig";
import useApi from "../../hooks/useApi";
import Separator from "../separator/Separator";
import styles from "./Banner.module.css";




const Banner = () => {
  const [movie, loading, error, randomMovie, backImg] = useApi(
    apiEntityOptions.topRatedMovies
  );
  
  const limitCharacters = (text) => {
    if(text != undefined){
      text = text.substring(0, 60) + "...";
    }
  }

  return (
    <div
      className={`${styles.banner_container}`}
      style={
        loading
          ? { backgroundImage: "none" }
          : {
              backgroundImage: `url(${backImg})`,
            }
      }
    >
      <div className={styles.banner_gradient}>
        <Separator height={"200px"} />

        <div className={styles.banner_title}>
          <h1>{loading ? "Loading..." : randomMovie?.title}</h1>
        </div>
        <Separator height={"40px"} />

        <div className = {styles.banner_overview}>
          <h2>{loading ? "Loading..." : randomMovie?.overview.split(".")[0]}</h2>
        </div>
        <div className={styles.banner_buttons}>
          <button
            className={styles.banner_button}
            onClick={() => {
              console.log(movie);
            }}
          >
            Play
          </button>
          <button className={styles.banner_button2}>More info</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;