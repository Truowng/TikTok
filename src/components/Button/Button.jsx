import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import clsx from "clsx";

const Button = ({
  to,
  href,
  children,
  primary,
  normal,
  outline,
  rounded,
  small,
  large,
  disabled,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) => {
  let Component = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  const classes = clsx(styles.wrapper, {
    [[className]]: className,
    [styles.primary]: primary,
    [styles.outline]: outline,
    [styles.rounded]: rounded,
    [styles.normal]: normal,
    [styles.small]: small,
    [styles.large]: large,
    [styles.disabled]: disabled,
  });
  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.title}>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </Component>
  );
};

export default Button;
