import React, { FC } from "react";
import { RUIcon } from "../../shared/icons/RUIcon";
import { TextInterSB } from "../../shared";
import styles from "./styles.module.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const LanguageSelect: FC = () => {
  return (
    <div className={styles.LanguageSelect}>
      <RUIcon />
      <TextInterSB text={"RU"} />
      <KeyboardArrowDownOutlinedIcon
        style={{ color: "#9395B8", width: "20px", height: "20px" }}
      />
    </div>
  );
};
