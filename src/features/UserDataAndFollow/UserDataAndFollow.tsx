import React, { FC } from "react";
import { User } from "../../widgets/Posts/consts";
import styles from "./styles.module.css";
import { RUIconRound } from "../../shared/icons/RUIconRound";
import { TextInterSB } from "../../shared";
import { Avatar, Button, Stack } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { FollowUserIcon } from "../../shared/icons/FollowUserIcon";

export const UserDataAndFollow: FC<{ user: User | undefined }> = ({ user }) => (
  <div className={styles.followUserWrapper}>
    <div className={styles.imageWrapper}>
      <Avatar src={`/images/${user?.name}.png`} />
      <RUIconRound />
    </div>
    <div className={styles.maxWidth}>
      <Stack direction={"row"} gap={"6px"} alignItems={"center"}>
        <TextInterSB fontWeight={548} text={user?.name || ""} />
        {user?.isVerified && (
          <VerifiedIcon
            sx={{ color: "#38C972", width: "13px", height: "13px" }}
          />
        )}
      </Stack>
      <div className={styles.statusBlock}>
        <TextInterSB
          fontSize={"12px"}
          lineHeight={"18px"}
          text={user?.profession || ""}
        />
        <div className={styles.dotContainer}>
          <Dot />
        </div>
        <div className={styles.ellipsis}>
          <TextInterSB
            fontSize={"12px"}
            lineHeight={"18px"}
            text={user?.status || ""}
          />
        </div>
      </div>
    </div>

    <Button
      sx={{
        backgroundColor: "#F1F3F7",
        height: "40px",
        width: "40px",
        minHeight: "40px",
        minWidth: "40px",
      }}
    >
      <FollowUserIcon />
    </Button>
  </div>
);

const Dot: FC = () => (
  <svg
    width="2"
    height="2"
    viewBox="0 0 2 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="1" cy="1" r="1" fill="#06082C" />
  </svg>
);
