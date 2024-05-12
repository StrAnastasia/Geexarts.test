import React, { FC } from "react";
import styles from "./styles.module.css";

const className = {
  1: "firstPlace",
  2: "secondPlace",
  3: "thirdPlace",
};

export const MedalIcon: FC<{ place: 1 | 2 | 3 }> = ({ place }) => {
  if (place < 1 || place > 3) return null;
  return (
    <div className={styles[className[place]]}>
      <div className={styles.medal}>{place}</div>
    </div>
  );
};
