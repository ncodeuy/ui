"use client";

import classNames from "classnames";
import { FC, ReactNode } from "react";

import styles from "./Heading.module.scss";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right";
  onClick?: () => void;
}

const Heading: FC<HeadingProps> = ({
  children,
  size,
  className,
  onClick,
  align,
}) => {
  return (
    <h1
      className={classNames(styles.Heading, className, styles[size || "md"])}
      style={{ textAlign: align }}
      onClick={onClick}
    >
      {children}
    </h1>
  );
};

export default Heading;
