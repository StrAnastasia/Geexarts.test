import React, { FC, useCallback, useState } from "react";
import styles from "./styles.module.css";
import { OptionsForMultiChoice, Search } from "../../shared";
import { sportsmen } from "./const";

export const ChooseSportsmen: FC = () => {
  const [chosen, setChosen] = useState<string[]>([]);

  const choose = useCallback(
    (ind: string) => {
      setChosen((prev) => {
        if (chosen.includes(ind)) return prev.filter((val) => val !== ind);
        return [...prev, ind];
      });
    },
    [chosen]
  );

  return (
    <div className={styles.sportsmen}>
      <Search />
      <div className={styles.twoCold}>
        {sportsmen.map((name, ind) => (
          <OptionsForMultiChoice
            ind={ind}
            mainText={name}
            secondaryText="Греко-римская борьба"
            imageSrc={`/images/${name}.png`}
            chosen={chosen}
            onClick={() => choose(String(ind))}
          />
        ))}
      </div>
    </div>
  );
};
