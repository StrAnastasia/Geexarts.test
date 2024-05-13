import React, { FC } from "react";
import styles from "./SportAndDate.module.css";
import { TextInterSB } from "../TextInterSB";

export const SportAndDate: FC<{ sport: string; date: string }> = ({
  sport,
  date,
}) => {
  if (sport === "")
    return <TextInterSB color="#9395B8" fontSize={"12px"} text={date} />;
  return (
    <div className={styles.sportAnddateContainer}>
      <TextInterSB color="#9395B8" fontSize={"12px"} text={sport} />
      <svg
        width="3"
        height="4"
        viewBox="0 0 3 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="1.5" cy="2" r="1.5" fill="#9395B8" />
      </svg>
      <TextInterSB color="#9395B8" fontSize={"12px"} text={date} />
    </div>
  );
};
