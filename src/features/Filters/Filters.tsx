import React, { FC, useCallback, useState } from "react";
import { Wrapper } from "../../shared/PostComponents/Wrapper";
import { TextInterSB } from "../../shared";
import styles from "./styles.module.css";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { AwardIcon, CertificateIcon } from "../../shared/icons";

const variants = [
  { value: "Все", icon: <GridViewOutlinedIcon /> },
  { value: "Результаты соревнований", icon: <CertificateIcon /> },
  { value: "Видео", icon: <VideocamOutlinedIcon /> },
  { value: "Достижения", icon: <AwardIcon /> },
];

export const Filters: FC = () => {
  const [active, setActive] = useState(variants[0].value);
  const changeActive = useCallback((value: string) => setActive(value), []);

  return (
    <Wrapper>
      <TextInterSB
        fontSize="20px"
        lineHeight="26px"
        fontWeight={600}
        letterSpacing={"-0.7px"}
        text={"Фильтр ленты"}
      />
      <div className={styles.filterButtonWrapper}>
        {variants.map(({ icon, value }) => (
          <button
            onClick={() => changeActive(value)}
            className={active === value ? styles.active : ""}
          >
            {icon}
            <TextInterSB fontWeight={548} text={value} />
          </button>
        ))}
      </div>
    </Wrapper>
  );
};
