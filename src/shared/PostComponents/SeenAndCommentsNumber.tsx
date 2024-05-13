import React, { FC, useMemo } from "react";
import styles from "./SeenAndCommentsNumber.module.css";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { TextInterSB } from "../TextInterSB";

function thousandsToK(number: number): string {
  return number > 1000
    ? `${Math.floor(number / 100) / 10} K`
    : String(number);
}

export const SeenAndCommentsNumber: FC<{
  seenNumber: number;
  commentsNumber: number;
}> = ({ seenNumber, commentsNumber }) => {

  const seen = useMemo(() => thousandsToK(seenNumber), [seenNumber]);
  const comm = useMemo(() => thousandsToK(commentsNumber), [commentsNumber]);
  return (
    <div className={styles.seenAndCommBlock}>
      <div>
        <RemoveRedEyeOutlinedIcon sx={{ color: "#9395B8" }} />
        <TextInterSB text={seen} color={"#7B7EA5"} />
      </div>
      <div>
        <ChatBubbleOutlineOutlinedIcon sx={{ color: "#9395B8" }} />
        <TextInterSB text={comm} color={"#7B7EA5"} />
      </div>
    </div>
  );
};
