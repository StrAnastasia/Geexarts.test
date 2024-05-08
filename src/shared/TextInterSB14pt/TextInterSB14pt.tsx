import React, { FC } from "react";
import { Typography } from "@mui/material";

export const TextInterSB14pt: FC<{ text: string }> = ({ text }) => {
  return (
    <Typography
      component={"p"}
      textTransform={"capitalize"}
      fontWeight={548}
      fontSize={"14px"}
      lineHeight={"20px"}
      letterSpacing={"-0.5px"}
      textAlign={"center"}
      // fontStyle={"Slant: 0"}
      color={"#06082C"}
      style={{ fontVariationSettings: "'slnt' 0" }}
      //styleName: ; // TODO:
      // font-variation-settings: 'slnt' 0;
    >
      {text}
    </Typography>
  );
};
