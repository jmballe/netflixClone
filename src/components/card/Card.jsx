import React, { useEffect, useState } from "react";
import { createUrl, apiImageOptions } from "../../apiConfig";
import styles from "./Card.module.css";

const Card = ({ title, imgPath }) => {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const url = createUrl.image(imgPath,apiImageOptions.posterLarge);
    setImg(url);
  }, [imgPath]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className={styles.card}
      >
        <h1 className={styles.card_title}>{title}</h1>
      </div>
    </div>
  );
};

export default Card;