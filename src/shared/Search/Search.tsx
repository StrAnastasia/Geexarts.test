import React, { FC } from "react";
import { Stack } from "@mui/material";
import { Button } from "../Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const grayBG = {
  background: "#F8F8F9",
  padding: "10px 12px",
  borderRadius: "10px",
  width: "-webkit-fill-available",
};

const svgColor = { color: "#9395B8" };

const input = {
  background: "transparent",
  fontSize: "12px",
  lineHeight: "20px",
  letterSpacing: "-0.5px",
  border: "none",
  padding: 0,
  width: "-webkit-fill-available",
};

export const Search: FC = () => (
  <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
    <div style={grayBG}>
      <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
        <SearchOutlinedIcon style={svgColor} />
        <input style={input} placeholder="Поиск" />
      </Stack>
    </div>
    <Button variant="black">Найти</Button>
  </Stack>
);
