"use client";

import { FC, ReactNode, useMemo } from "react";
import styles from "./Dropdown.module.scss";
import classNames from "classnames";
import useToggle from "../hooks/use-toggle";

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  value: any;
  onChange: (value: string) => void;
  options: DropdownOption[];
  disabled?: boolean;
  placeholder?: string;
  icon?: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({
  value,
  onChange,
  options,
  disabled,
  placeholder,
  icon,
}) => {
  //-----------------------------------------------------------------------------------------------
  //                                         STATE
  //-----------------------------------------------------------------------------------------------
  const [isOpen, toggleIsOpen] = useToggle(false);

  //-----------------------------------------------------------------------------------------------
  //                                         DOM STRUCTURE
  //-----------------------------------------------------------------------------------------------
  const text = useMemo(
    () =>
      options.find((option) => option.value === value)?.label ||
      placeholder ||
      "Select an option",
    [value, options]
  );

  return (
    <div
      className={classNames(styles.Wrapper, { [styles.disabled]: disabled })}
      onClick={toggleIsOpen}
    >
      <div className={styles.Dropdown}>
        {icon && <div className={styles.Icon}>{icon}</div>}
        <div className={styles.Text}>{text}</div>
        <div className={styles.Handle}>▼</div>
      </div>

      <div className={classNames(styles.Menu, { [styles.open]: isOpen })}>
        {options.map((option) => (
          <div className={styles.Option} onClick={() => onChange(option.value)}>
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
