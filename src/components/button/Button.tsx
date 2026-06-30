"use client";

import React, { FC } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  borderRadius?: "square" | "rounded";
  fontSize?: "xs" | "s" | "m" | "l" | "xl";
}

const Button: FC<ButtonProps> = function ({
  children,
  type = "button",
  disabled,
  onClick,
  borderRadius = "square",
  fontSize = "m",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        styles.button,
        styles[`button--${disabled ? "disabled" : "active"}`],
        styles[`button--border-radius-${borderRadius}`],
        styles[`button--font-size-${fontSize}`],
      )}
    >
      {children}
    </button>
  );
};

export default Button;
