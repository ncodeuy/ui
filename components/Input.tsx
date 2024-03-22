"use client";

import { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";

import { Field } from "../hooks/use-form-field";

interface InputProps {
  placeholder?: string;
  left?: ReactNode;
  right?: ReactNode;
  secret?: boolean;
  type?: "text" | "password" | "email" | "number";
  field: Field;
}

const Input: FC<InputProps> = ({
  field,
  placeholder,
  secret,
  type,
  left,
  right,
}) => {
  return (
    <div
      className={classNames(styles.Wrapper, {
        [styles.disabled]: field.disabled,
        [styles.error]: field.isDirty && field.error,
      })}
    >
      <div className={styles.Left}>{left}</div>
      <input
        disabled={field.disabled}
        className={styles.Input}
        value={field.value as any}
        onChange={(e) => field.onChange(e.target.value)}
        onBlur={field.setDirty}
        placeholder={placeholder}
        type={secret ? "password" : type || "text"}
      />
      <div className={styles.Right}>
        {field.isDirty && field.error ? (
          <span className={styles.ErrorIcon} title={field.error}>
            ⚠
          </span>
        ) : (
          right
        )}
      </div>
    </div>
  );
};

export default Input;
