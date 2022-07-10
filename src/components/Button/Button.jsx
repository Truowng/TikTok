import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import clsx from "clsx";

const Button = ({
  to,
  href,
  onClick,
  children,
  primary,
  normal,
  outline,
  small,
  large,
  disabled,
  ...passProps
}) => {
  let Component = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  const classes = clsx(styles.wrapper, {
    [styles.primary]: primary,
    [styles.outline]: outline,
    [styles.normal]: normal,
    [styles.small]: small,
    [styles.large]: large,
    [styles.disabled]: disabled,
  });
  return (
    <Component className={classes} {...props}>
      <span>{children}</span>
    </Component>
  );
};

export default Button;
