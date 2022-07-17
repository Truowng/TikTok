import React from "react";
import Button from "@/components/Button/Button";
import styles from "./Menu.module.scss";

const MenuItem = ({ data }) => {
  return (
    <Button className={styles.menuItem} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
};

export default MenuItem;
