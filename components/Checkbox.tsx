"use client";

import { FC } from "react";
import classNames from "classnames";

import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled,
  className,
}) => {
  return (
    <div
      className={classNames(styles.Wrapper, className, {
        [styles.disabled]: disabled,
      })}
      onClick={() => onChange(!checked)}
    >
      <div
        className={classNames(styles.Checkbox, { [styles.checked]: checked })}
      >
        {checked && "✓"}
      </div>
      <span className={styles.Label}>{label}</span>
    </div>
  );
};

export default Checkbox;
