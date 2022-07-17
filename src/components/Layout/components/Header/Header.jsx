import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import {
  faCircleXmark,
  faEllipsisVertical,
  faMagnifyingGlass,
  faPlus,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";

import images from "@/assets/image";
import styles from "./Header.module.scss";
import Wrapper from "@/components/Popper/Wrapper";
import AccountItem from "@/components/AccountItem/AccountItem";
import Button from "@/components/Button/Button";
import Menu from "@/components/Popper/Menu/Menu";

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

const Header = () => {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  });
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <img src={images.logo} alt="TikTok" />
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={styles.searchResult} tabIndex="-1" {...attrs}>
              <Wrapper>
                <h4 className={styles.searchTitle}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </Wrapper>
            </div>
          )}
        >
          <div className={styles.search}>
            <input placeholder="Search" spellCheck={false} />
            <button className={styles.clearBtn}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            {/* <FontAwesomeIcon className={styles.loading} icon={faSpinner} /> */}

            <button className={styles.searchBtn}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={styles.action}>
          <Button normal leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button primary>Log in</Button>

          <Menu items={MENU_ITEMS}>
            <button className={styles.moreBtn}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
