import React from "react";
import CustomContainer from "../../containers/customContainer";
import classNames from "classnames";
import CustomLine from "../custom_line";

const PageHeader = ({
  children,
  className,
  heading = "No heading",
  headingId = "00",
}) => {
  return (
    <CustomContainer className={classNames(className)}>
      <h3 className="flex items-center gap-x-4">
        <span className="text-cyan-400 text-lg">{headingId}.</span>
        <span className="font-bold text-3xl">{heading}</span>
        <CustomLine height={"1"} width={"250"} color={"#075985"} />
      </h3>
      {children}
    </CustomContainer>
  );
};

export default PageHeader;
