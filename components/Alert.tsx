import { FC, ReactNode } from "react";
import styles from "./Alert.module.scss";

interface AlertProps {
  color: "primary" | "secondary" | "danger" | "warning";
  align?: "left" | "center" | "right";
  children: ReactNode;
}

const Alert: FC<AlertProps> = ({ color, align, children }) => {
  return <div className={styles.Alert}>{children}</div>;
};
