import React, { FC } from "react";
import { Wrapper } from "../../shared/PostComponents/Wrapper";
import { TextInterSB } from "../../shared";
import { users } from "./users";
import { UserDataAndFollow } from "../../features/UserDataAndFollow/UserDataAndFollow";
import styles from "./styles.module.css"
import { Stack } from "@mui/material";

export const RecommendedUsers: FC = () => (
  <Wrapper>
    <TextInterSB
      fontSize="20px"
      lineHeight="26px"
      fontWeight={600}
      letterSpacing={"-0.7px"}
      text={"Интересные подписки"}
    />
    <Stack gap="20px">
    {users.map((user) => (
      <UserDataAndFollow user={user} />
    ))}
    </Stack>
    <button className={styles.button}>
      <TextInterSB fontWeight={548} text="Смотреть всех" />
    </button>
  </Wrapper>
);
