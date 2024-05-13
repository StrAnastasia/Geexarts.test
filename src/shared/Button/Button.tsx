import React, { FC, ReactNode } from "react";
import styles from "./styles.module.css";
import { TextInterSB } from "../TextInterSB";

export const Button: FC<{
  children?: ReactNode;
  variant: "black" | "gray" | "white" | "blue";
  fullWidth?: boolean;
  iconWidth?: boolean;
  justifyContent?: "start" | "center" | "end";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
  type?: "submit" | "button";
  disabled?: boolean;
}> = ({
  children,
  variant,
  fullWidth = false,
  iconWidth = false,
  justifyContent = "start",
  leftIcon,
  rightIcon,
  onClick,
  type = "button",
  disabled = false,
}) => (
  <button
    className={`${styles.button} 
    ${fullWidth ? styles.fullWidth : ""} 
    ${iconWidth ? styles.iconWidth : ""} 
    ${styles[justifyContent]}
    ${styles[variant]}`}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {leftIcon}
    <TextInterSB color="inherit" fontWeight={548} text={children as string} />
    {rightIcon}
  </button>
);
