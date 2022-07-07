import Header from "./Header/Header";
import SiderBar from "./SiderBar/SideeBar";

import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <SiderBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
