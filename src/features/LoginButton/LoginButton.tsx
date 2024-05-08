import React, { FC } from "react";
import { Button } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const LoginButton: FC = () => (
  <Button
    sx={{
      backgroundColor: "#F1F3F7",
      height: "40px",
      width: "40px",
      minHeight: "40px",
      minWidth: "40px",
    }}
  >
    <PersonOutlineOutlinedIcon sx={{ color: "#06082C" }} />
  </Button>
);
