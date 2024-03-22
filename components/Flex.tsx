"use client";

import { FC, ReactNode } from "react";

import styles from "./Flex.module.scss";
import classNames from "classnames";

interface FlexProps {
  column?: boolean;
  row?: boolean;
  children?: ReactNode;
  justify?: "start" | "end" | "center" | "space-between" | "space-around";
  align?: "start" | "end" | "center" | "stretch";
  gap?: number;
  className?: string;
}

const Flex: FC<FlexProps> = ({
  column,
  row,
  children,
  justify,
  align,
  gap,
  className,
}) => {
  return (
    <div
      className={classNames(styles.Flex, className, {
        [styles.column]: column,
        [styles.row]: row,
      })}
      style={{
        justifyContent: justify,
        alignItems: align,
        gap: gap ? `${gap}px` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
