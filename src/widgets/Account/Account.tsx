import React, { FC } from "react";
import styles from "./styles..module.css";

import { Avatar, Stack } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { RUIcon, ShareIcon } from "../../features";
import { TextInterSB } from "../../shared";
import { Button } from "../../shared/Button";
import { followed, followers, user } from "./const";
import { Followers } from "./Followers";

export const Account: FC<{ filled: boolean }> = ({ filled }) => (
  <div className={styles.wrapper}>
    <Stack direction="row" spacing={2} sx={{ mb: "28px" }}>
      <Avatar
        sx={{ width: "140px", height: "140px" }}
        src={filled ? `/images/${user.name}.png` : ""}
      />
      <div className={styles.texts}>
        {filled && (
          <Stack direction="row" alignItems="center">
            <RUIcon />
            <TextInterSB
              sx={{ marginLeft: "10px" }}
              fontWeight={548}
              color={"#9395B8"}
              text={user.country}
            />
          </Stack>
        )}
        {filled && (
          <TextInterSB
            sx={{ margin: "12px 0 36px" }}
            fontSize="30px"
            lineHeight="32px"
            letterSpacing="-1%"
            fontWeight={600}
            text={user.name}
          />
        )}
        <Stack direction="row" spacing={4}>
          <Followers users={filled ? followers : []} description="Подписчики" />
          <Followers users={filled ? followed : []} description="Подписки" />
        </Stack>
      </div>
    </Stack>
    {filled && (
      <Button variant="blue" leftIcon={<InfoOutlinedIcon />}>
        Подтвердите личность для доступа к новым функциям
      </Button>
    )}
    <div className={styles.birthdayAndPhone}>
      {filled && <div>
        <TextInterSB fontWeight={548} color="#9395B8" text="День рождения" />
        <TextInterSB fontWeight={548} text="12 сентября 1994" />
      </div>}
      <div>
        <TextInterSB fontWeight={548} color="#9395B8" text="Номер телефона" />
        <TextInterSB fontWeight={548} text="+7 (773) 493 39 10" />
      </div>
    </div>
    <Stack direction="row" spacing={"10px"}>
      <Button variant="black">Редактировать</Button>
      <Button variant="gray" iconWidth leftIcon={<ShareIcon />} />
    </Stack>
  </div>
);
