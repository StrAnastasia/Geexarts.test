import React, { FC } from "react";
import { Stack } from "@mui/material";
import styles from "./styles..module.css";
import { TextInterSB } from "../../shared";

export const Followers: FC<{ users: string[]; description: string }> = ({
  users,
  description,
}) => (
  <Stack direction="row">
    {!!users.length && (
      <div
        className={
          users.length === 2
            ? styles.repositionTwoAvatars
            : styles.repositionThreeAvatars
        }
      >
        {(users.length === 2 ? users : users.slice(0, 3)).map((name) => (
          <img alt={name} src={`/images/${name}.png`} />
        ))}
      </div>
    )}
    <TextInterSB
      sx={{ ml: 1, mr: "6px" }}
      fontWeight={548}
      text={String(users.length)}
    />
    <TextInterSB color={"#9395B8"} text={description} />
  </Stack>
);
