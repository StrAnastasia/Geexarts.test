import React, { FC, useMemo } from "react";
import { Avatar, Stack } from "@mui/material";
import styles from "./styles.module.css";
import { TextInterSB } from "../TextInterSB";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const OptionsForMultiChoice: FC<{
  imageSrc: string;
  mainText: string;
  secondaryText?: string;
  chosen: string[];
  onClick: () => void;
  ind: number;
}> = ({ imageSrc, mainText, chosen, onClick, ind, secondaryText }) => {
  const sportsmanIsChosen = useMemo(
    () => chosen.includes(String(ind)),
    [chosen, ind]
  );
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack
        direction="row"
        className={sportsmanIsChosen && styles.chosen}
        spacing={1.5}
        alignItems={"center"}
      >
        <Avatar sx={{ width: "60px", height: "60px" }} src={imageSrc} />
        {secondaryText ? (
          <Stack spacing={1}>
            <TextInterSB fontWeight={548} text={mainText} />
            <TextInterSB color="#7B7EA5" text={secondaryText} />
          </Stack>
        ) : (
          <span className={styles.ellipsis}>
            <TextInterSB text={mainText} />
          </span>
        )}
      </Stack>
      <button className={styles.chosenButton} onClick={onClick}>
        {sportsmanIsChosen && <CheckBoxIcon />}
      </button>
    </Stack>
  );
};
