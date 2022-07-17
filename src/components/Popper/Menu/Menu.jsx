import React from "react";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Menu.module.scss";
import Wrapper from "../Wrapper";
import MenuItem from "./MenuItem";

const Menu = ({ children, items = [] }) => {
  const renderItems = () => {
    return items.map((item, index) => {
      return <MenuItem key={index} data={item} />;
    });
  };

  return (
    <Tippy
      interactive
      visible
      placement="bottom-end"
      render={(attrs) => (
        <div className={styles.menuList} tabIndex="-1" {...attrs}>
          <Wrapper>{renderItems()}</Wrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
