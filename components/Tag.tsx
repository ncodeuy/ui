import { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Tag.module.scss";

interface TagProps {
  color?: "primary" | "danger" | "warning" | "info" | "white" | "black";
  children: ReactNode;
}

const Tag: FC<TagProps> = ({ color = "primary", children }) => {
  return (
    <span className={classNames(styles.Tag, styles[color])}>{children}</span>
  );
};

export default Tag;
