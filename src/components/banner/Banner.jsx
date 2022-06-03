import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React, { useEffect } from "react";
import { apiEntityOptions } from "../../apiConfig";
import useApi from "../../hooks/useApi";
import Separator from "../separator/Separator";
import styles from "./Banner.module.css";




const Banner = ({type}) => {
  const [movie, loading, error, randomMovie, backImg] = useApi(
    apiEntityOptions.topRatedMovies
  );

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
      {type && (
        <div className={styles.category}>
          <span>{type === "Movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
          </select>
        </div>
      )}
      <div className={styles.banner_gradient}>
        <Separator height={"270px"} />

        <div className={styles.banner_title}>
          <h1>{loading ? "Loading..." : randomMovie?.title}</h1>
        </div>
        {/* <Separator height={"30px"} /> */}

        <div className = {styles.banner_overview}>
          <h2>{loading ? "Loading..." : randomMovie?.overview.split(".")[0] + (randomMovie ? "." : "") }</h2>
        </div>
        <div className={styles.banner_buttons}>
          <button
            className={styles.banner_button}
            onClick={() => {
              console.log(movie);
            }}
          ><PlayArrow fontSize="large"/>
            <span>Play</span>
          </button>
          <button className={styles.banner_button2}>
            <InfoOutlined fontSize="large"/>
            <span>More info</span></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;