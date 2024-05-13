import React, { FC } from "react";
import styles from "./AddBanner.module.css";

export const AdBanner: FC<{
  ad?: {
    image: string;
    text: string;
    sale: string;
  };
}> = ({ ad }) => {
  return (
    <div style={{ backgroundImage: `url(${ad?.image})` }} className={styles.ad}>
      <div>
        <p className={styles.adtext}>{ad?.text}</p>
        <p className={styles.sale}>{ad?.sale}</p>
      </div>
      <img src={"/images/adlogo.png"} alt="adlogo" />
    </div>
  );
};
