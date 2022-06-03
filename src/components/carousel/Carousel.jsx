import React, { useEffect } from "react";
import Slider from "react-slick";
import useApi from "../../hooks/useApi";
import Card from "../Card/Card";
import { settingsSlider } from "./settings";

const Carousel = ({ entity, title }) => {
  const [values, loading, error] = useApi(entity);

  return (
    <>
      <div style={{
              marginLeft: "4%",
              marginRight: "4%",
            }}>
        <div>
          <h1
            style={{
              color: "white",
              fontWeight: "lighter",
              marginBottom: "10px",
            }}
          >
            {title}
          </h1>
        </div>
        <Slider {...settingsSlider}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            values.map((value) => (
              <Card
                key={value.id}
                title={value.title || value.name}
                imgPath={value.backdrop_path}
              />
            ))
          )}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
