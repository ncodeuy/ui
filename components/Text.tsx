"use client";

import classNames from "classnames";
import styles from "./Text.module.scss";
import { FC, ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  className?: string;
}

const Text: FC<TextProps> = ({ children, size, align, className }) => {
  return (
    <p
      className={classNames(styles.Text, className, styles[size || "md"])}
      style={{ textAlign: align }}
    >
      {children}
    </p>
  );
};

export default Text;
