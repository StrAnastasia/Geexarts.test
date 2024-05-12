import React, { FC } from "react";
import styles from "./styles.module.css";
import { Stack } from "@mui/material";
import { LogoIcon } from "../icons";
import { TextInterSB } from "../TextInterSB";

export const HomepageAd: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.banner}>
      <Stack direction={"row"}>
        <LogoIcon />
        <div className={styles.sport}>
          <TextInterSB
            fontSize="20px"
            lineHeight="26px"
            fontWeight={600}
            text={"Велоспорт"}
          />
        </div>
        <div className={styles.city}>
          <TextInterSB
            fontSize="20px"
            lineHeight="26px"
            fontWeight={600}
            color="white"
            text={"Москва "}
          />
          <TextInterSB
            fontSize="20px"
            lineHeight="26px"
            fontWeight={600}
            color="rgb(255 255 255 / 50%)"
            text={"2024"}
          />
        </div>
      </Stack>
      <div className={styles.description}>
        <TextInterSB
          fontSize="30px"
          lineHeight="32px"
          fontWeight={600}
          text={"Тур Альп-2024"}
        />
        <TextInterSB
          fontSize="30px"
          lineHeight="32px"
          fontWeight={600}
          text={"Этап 3"}
        />
      </div>
    </div>
  </div>
);
