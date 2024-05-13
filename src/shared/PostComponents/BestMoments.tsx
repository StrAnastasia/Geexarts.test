import React, { FC } from "react";
import styles from "./BestMoments.module.css";
import { TextInterSB } from "../TextInterSB";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

function thousandsToK(number: number): string {
  return number > 1000 ? `${Math.floor(number / 100) / 10} K` : String(number);
}

export const BestMoments: FC<{
  videos: {
    previews: string;
    seenTimes: number;
    duration: string;
  }[];
}> = ({ videos }) => {
  return (
    <div className={styles.bestMomentsBlock}>
      {videos.map(({ previews, seenTimes, duration }) => (
        <div style={{ backgroundImage: `url(${previews})` }}>
          <div className={styles.seen}>
            <RemoveRedEyeOutlinedIcon sx={{ color: "white" }} />
            <TextInterSB
              fontWeight={548}
              color="white"
              text={thousandsToK(seenTimes)}
            />
          </div>
          <TextInterSB fontWeight={548} color="white" text={duration} />
        </div>
      ))}
      <button className={styles.seeAllVideos}>
        <TextInterSB fontWeight={548} text="Смотреть все" />
      </button>
    </div>
  );
};
