"use client";

import { FC, ReactNode } from "react";
import styles from "./Label.module.scss";

interface LabelProps {
  children: ReactNode;
  text: string;
}

const Label: FC<LabelProps> = ({ children, text }) => {
  return (
    <div className={styles.Label}>
      <label className={styles.Text}>{text}</label>
      {children}
    </div>
  );
};

export default Label;
