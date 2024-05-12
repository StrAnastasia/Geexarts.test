import React, { FC, useCallback, useState } from "react";
import styles from "./styles.module.css";
import { OptionsForMultiChoice, Search } from "../../shared";
import { orgs } from "./const";

export const ChooseOrganizations: FC = () => {
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
    <div className={styles.organizations}>
      <Search />
      <div className={styles.twoCold}>
        {orgs.map(({ name, img }, ind) => (
          <OptionsForMultiChoice
            ind={ind}
            mainText={name}
            imageSrc={img}
            chosen={chosen}
            onClick={() => choose(String(ind))}
          />
        ))}
      </div>
    </div>
  );
};
