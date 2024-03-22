"use client";

import { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  color?: "primary" | "warning" | "danger" | "black" | "white";
  style?: "ghost";
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  onClick: () => void | Promise<void>;
}

const Button: FC<ButtonProps> = ({
  icon,
  children,
  color,
  style,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.Button,
        styles[style || "solid"],
        styles[color || "primary"]
      )}
    >
      <div>{icon}</div>

      {children}
    </button>
  );
};

export default Button;
