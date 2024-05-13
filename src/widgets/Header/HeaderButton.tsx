import { Button } from "@mui/material";
import React, { FC, ReactNode, useMemo } from "react";
import { theme } from "../../App";
import { Link, useLocation } from "react-router-dom";
import { TextInterSB } from "../../shared";

export const HeaderButton: FC<{
  label: string;
  href: string;
  onClick?: () => void;
  icon: ReactNode;
}> = ({ label, href, onClick, icon }) => {
  const { pathname } = useLocation();

  const color = useMemo(
    () => (pathname === href ? theme.palette.primary.contrastText : "#9395B8"),
    [pathname, href]
  );

  const linkStyle = useMemo(
    () => ({
      padding: "8px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color,
      textDecoration: "none",
    }),
    [color]
  );

  return (
    <Button key={label} onClick={onClick}>
      <Link to={href} style={linkStyle}>
        {icon}
        <TextInterSB
          textAlign="center"
          fontWeight={548}
          color={color}
          text={label}
        />
      </Link>
    </Button>
  );
};
