import React, { FC, useCallback, useState } from "react";
import styles from "./styles.module.css";
import { sports } from "./const";

export const ChooseSports: FC = () => {
  const [chosen, setChosen] = useState<string[]>([]);

  const choose = useCallback(
    (sport: string) => {
      setChosen((prev) => {
        if (chosen.includes(sport)) return prev.filter((val) => val !== sport);
        return [...prev, sport];
      });
    },
    [chosen]
  );

  return (
    <div className={`${styles.grid} ${styles.mb16}`}>
      {sports.map((sport, ind) => (
        <div
          style={{ backgroundImage: `url(/images/chooseSport${ind}.png)` }}
          className={chosen.includes(sport) ? styles.chosen : ""}
          onClick={() => choose(sport)}
        >
          <p>{sport}</p>
        </div>
      ))}
    </div>
  );
};
