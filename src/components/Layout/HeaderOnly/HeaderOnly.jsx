// import Header from "../components/Header/Header";
import Header from "../components/Header/Header";

import React from "react";

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default HeaderOnly;
