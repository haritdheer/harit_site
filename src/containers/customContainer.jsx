import React from "react";
import classNames from "classnames";

const CustomContainer = ({ className, children }) => {
  return <div className={classNames(className)}>{children}</div>;
};

export default CustomContainer;
