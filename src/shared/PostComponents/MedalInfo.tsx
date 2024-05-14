import React, { FC } from "react";
import styles from "./MedalInfo.module.css";
import { TextInterSB } from "../TextInterSB";
import { MedalData } from "../../widgets/Posts/consts";
import { MedalIcon } from "../MedalIcon";
import { Stack } from "@mui/material";

const congratter = "Дмитрий Зайцев";

export const MedalInfo: FC<{ medalData: MedalData | undefined }> = ({
  medalData,
}) => (
  <>
    <div className={styles.medalWrapper}>
      <MedalIcon place={medalData?.place as 1 | 2 | 3} />
      <Stack gap={1}>
        <TextInterSB
          textAlign="center"
          fontWeight={548}
          text={`Занял ${medalData?.place}-е место`}
        />
        <TextInterSB
          textAlign="center"
          color="#7B7EA5"
          text={medalData?.contest || ""}
        />
      </Stack>
    </div>
    <div className={styles.congratters}>
      <img src={`/images/${congratter}.png`} alt={congratter} />
      <TextInterSB fontWeight={548} text={congratter} />
      <TextInterSB
        color="#7B7EA5"
        text={`и еще ${medalData?.congratsNumber} человек поздравили`}
      />
    </div>
    <button className={styles.congrat}>
      <TextInterSB fontWeight={548} color="white" text="Поздравить" />
    </button>
  </>
);
