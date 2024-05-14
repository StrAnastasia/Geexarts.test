import React, { FC } from "react";
import { User } from "../../widgets/Posts/consts";
import styles from "./styles.module.css";
import { TextInterSB } from "../../shared";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { KZIconRound, RBIconRound, RUIconRound } from "../../shared/icons";

const flag = {
  RU: <RUIconRound />,
  KZ: <KZIconRound />,
  RB: <RBIconRound />,
};

export const FollowUserCard: FC<{ user: User | undefined }> = ({ user }) => (
  <div className={styles.container}>
    <div className={styles.cross}>
      <CloseOutlinedIcon />
    </div>
    <div className={styles.imageWrapper}>
      <img src={`/images/${user?.name}.png`} alt={user?.name} />
      {flag[user?.country || "RU"]}
    </div>

    <TextInterSB
      textAlign="center"
      fontWeight={548}
      color="white"
      text={user?.name || ""}
    />

    <button>
      <TextInterSB fontWeight={548} text={"Подписаться"} />
    </button>
  </div>
);
