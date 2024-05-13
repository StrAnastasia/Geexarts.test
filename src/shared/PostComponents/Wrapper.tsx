import React, { FC, ReactNode } from "react";
import styles from "./Wapper.module.css";

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
