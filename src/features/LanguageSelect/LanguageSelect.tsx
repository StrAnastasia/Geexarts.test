import React, { FC } from "react";
import { MenuItem, Select } from "@mui/material";
import { RUIcon } from "./RUIcon";
import { TextInterSB14pt } from "../../shared";
import styles from "./styles.module.css";

export const LanguageSelect: FC = () => {
  return (
    <Select labelId="label" id="select" value="RU">
      <MenuItem
        value="RU"
        sx={{ display: "flex", gap: "6px", alignItems: "center" }}
        className={styles.LanguageSelect}
      >
        <RUIcon />
        <TextInterSB14pt text={"RUS"} />
      </MenuItem>
      <MenuItem
        value="ENG"
        sx={{ display: "flex", gap: "6px", alignItems: "center" }}
      >
        <RUIcon />
        <TextInterSB14pt text={"ENG"} />
      </MenuItem>
    </Select>
  );
};
