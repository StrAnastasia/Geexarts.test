import React, { FC, useMemo } from "react";
import styles from "./styles.module.css";
import { TextInterSB } from "../TextInterSB";

export const WinnersStand: FC<{ winners: string[] }> = ({ winners }) => {
  const firstPlace = useMemo(() => winners?.[0], [winners]);
  const secondPlace = useMemo(() => winners?.[1], [winners]);
  const thirdPlace = useMemo(() => winners?.[2], [winners]);

  if (winners.length < 3) return null;
  return (
    <div className={styles.winnersBlock}>
      <div className={styles.secondPlace}>
        <img src={`/images/${secondPlace}.png`} alt={secondPlace} />
        <div className={styles.medal}>2</div>
        {/* TODO: */}
        <TextInterSB textAlign="center" fontSize="16px" text={secondPlace} />
      </div>
      <div className={styles.firstPlace}>
        <img src="/images/halfCrown.png" alt="halfCrown left" className={styles.halfCrownLeft} />
        <img src={`/images/${firstPlace}.png`} alt={firstPlace} />
        <img src="/images/halfCrown.png" alt="halfCrown right" className={styles.halfCrownRight} />
        <div className={styles.medal}>1</div>
        {/* TODO: */}
        <TextInterSB textAlign="center" fontSize="16px" text={firstPlace} />
      </div>
      <div className={styles.thirdPlace}>
        <img src={`/images/${thirdPlace}.png`} alt={thirdPlace} />
        <div className={styles.medal}>3</div>
        {/* TODO: */}
        <TextInterSB textAlign="center" fontSize="16px" text={thirdPlace} />
      </div>
    </div>
  );
};
