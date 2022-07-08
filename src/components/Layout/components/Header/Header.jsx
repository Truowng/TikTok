import React from "react";
import styles from "./Header.module.scss";
import images from "@/assets/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <img src={images.logo} alt="TikTok" />
        <div className={styles.search}>
          <input placeholder="Search" spellCheck={false} />
          {/* <button className={styles.clearBtn}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button> */}
          <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
          <button className={styles.searchBtn}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={styles.action}></div>
      </div>
    </header>
  );
};

export default Header;
