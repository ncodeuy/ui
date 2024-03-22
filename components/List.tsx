"use client";

import { FC, ReactNode } from "react";
import styles from "./List.module.scss";
import Heading from "./Heading";

interface ListProps {
  children: ReactNode;
  collapsed?: boolean;
}

const List: FC<ListProps> = ({ children, collapsed }) => {
  return (
    <details className={styles.List} open={!collapsed}>
      {children}
    </details>
  );
};

interface ItemProps {
  children: ReactNode;
  left?: ReactNode;
  right?: ReactNode;
}

const Item: FC<ItemProps> = ({ children, left, right }) => {
  return (
    <div className={styles.Item}>
      {left && <div className={styles.Left}>{left}</div>}
      <div className={styles.Content}>{children}</div>

      {right && <div className={styles.Right}>{right}</div>}
    </div>
  );
};

interface HeaderProps {
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <summary className={styles.Header}>
      <Heading size="xs">{children}</Heading>
      <div className={styles.Handle}>▼</div>
    </summary>
  );
};

type CompoundedComponent = FC<ListProps> & {
  Item: typeof Item;
  Header: typeof Header;
};

const Component = List as CompoundedComponent;
Component.Item = Item;
Component.Header = Header;

export default Component;
