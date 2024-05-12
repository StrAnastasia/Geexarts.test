import React, { FC } from "react";
import { Wrapper } from "../../shared/PostComponents/Wrapper";
import { TextInterSB } from "../../shared";
import { news } from "./news";
import styles from "./styles.module.css";
import { Stack } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export const RecommendedNews: FC = () => (
  <Wrapper>
    <TextInterSB
      fontSize="20px"
      lineHeight="26px"
      fontWeight={600}
      letterSpacing={"-0.7px"}
      text={"Последние новости"}
    />
    <Stack gap={2}>
      {news.map(({ sport, title, date }) => (
        <div className={styles.article}>
          <TextInterSB
            fontSize="12px"
            lineHeight="12px"
            fontWeight={600}
            color="#9395B8"
            letterSpacing={"-0.1px"}
            text={sport}
          />
          <TextInterSB fontWeight={548} text={title} />
          <div>
            <CalendarTodayOutlinedIcon />
            <TextInterSB
              fontSize="12px"
              lineHeight="12px"
              fontWeight={600}
              color="#9395B8"
              letterSpacing={"-0.1px"}
              text={date}
            />
          </div>
        </div>
      ))}
    </Stack>
    <button className={styles.button}>
      <TextInterSB fontWeight={548} text="Смотреть всех" />
    </button>
  </Wrapper>
);
