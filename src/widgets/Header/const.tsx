import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

export const tabs = [
  {
    label: "Лента",
    href: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    label: "Маркетплейс",
    href: "/marketplace",
    icon: <ShoppingBagOutlinedIcon />,
  },
  {
    label: "Рейтинги",
    href: "/ratings",
    icon: <GroupOutlinedIcon />,
  },
  {
    label: "Cоревнования",
    href: "/competitions",
    icon: <EmojiEventsOutlinedIcon />,
  },
  {
    label: "Организации",
    href: "/organisations",
    icon: <AccountBalanceOutlinedIcon />,
  },
];
