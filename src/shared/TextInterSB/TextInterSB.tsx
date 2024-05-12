import React, { FC } from "react";
import { Typography } from "@mui/material";

export const TextInterSB: FC<{
  text: string;
  color?: string;
  fontSize?: string;
  textAlign?: "start" | "center";
  fontWeight?: number;
  lineHeight?: string;
  letterSpacing?: string;
  sx?: Record<string, string | number>;
  clasName?: any;
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "inherit"
    | "initial";
}> = ({
  text,
  color = "#06082C",
  fontSize = "14px",
  textAlign = "start",
  fontWeight = 400,
  textTransform = "initial",
  lineHeight = "20px",
  letterSpacing = "-0.5px",
  sx,
  clasName,
}) => {
  return (
    <Typography
      sx={sx}
      component={"p"}
      textTransform={textTransform}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      color={color}
      style={{ fontVariationSettings: "'slnt' 0" }}
    >
      {text}
    </Typography>
  );
};
