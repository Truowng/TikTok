import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./AccountItem.module.scss";

const AccountItem = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.avatar}
        src="https://scontent.fhan5-9.fna.fbcdn.net/v/t1.6435-1/194916812_2113927708746351_5336056847706647343_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=hF_PIe8650EAX_ewoSP&_nc_oc=AQmvPodr7bElwc2Eh_ky00g8gXRigV26ioLXWd6mT8W-g94ZpD2iiwE-vawZnCAZxKw&_nc_ht=scontent.fhan5-9.fna&oh=00_AT9Z_gBEsB4Xw5wRJDVWbCmU9rvTydsrsKnz6y524fLcsw&oe=62EE5CC6"
        alt="Khanh"
      />
      <div className={styles.info}>
        <h4 className={styles.name}>
          <span>Truong Quoc Khanh</span>
          <FontAwesomeIcon className={styles.check} icon={faCheckCircle} />
        </h4>
        <span className={styles.userName}>truowng</span>
      </div>
    </div>
  );
};

export default AccountItem;
