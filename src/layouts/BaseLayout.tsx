import React, { FC, ReactNode } from "react";
import { Header } from "../widgets/Header/Header";

export const BaseLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
