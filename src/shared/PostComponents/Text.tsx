import React, { FC, useMemo } from "react";
import styles from "./Text.module.css";

export const Text: FC<{ text: string }> = ({ text }) => {
  const addReedMore = useMemo(() => text.length > 210, [text]);
  const displayedText = useMemo(
    () => (addReedMore ? text.slice(0, 182) + "... " : text),
    [addReedMore, text]
  );
  return (
    <>
      <p className={styles.text}>
        {displayedText}
        {addReedMore ? <b className={styles.textB}>Читать больше</b> : ""}
      </p>
    </>
  );
};
