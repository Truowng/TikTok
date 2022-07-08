import Header from "../components/Header/Header";
import SiderBar from "./SideBar/SideBar";
import styles from "./DefaultLayout.module.scss";

import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <SiderBar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
