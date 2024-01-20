import React from "react";
import CustomContainer from "../../containers/customContainer";
import classNames from "classnames";
import CustomLine from "../custom_line";

const PageHeader = ({
  children,
  className,
  childrenClass,
  heading = "No heading",
  headingId = "00",
}) => {
  return (
    <CustomContainer
      className={classNames(className, "flex flex-col gap-y-10")}
    >
      <h3 className="flex items-center gap-x-4">
        <span className="text-cyan-400 text-lg">{headingId}.</span>
        <span className="font-bold text-3xl">{heading}</span>
        <CustomLine height={"2"} width={"300"} color={"#253854"} />
      </h3>
      <CustomContainer className={childrenClass}>{children}</CustomContainer>
    </CustomContainer>
  );
};

export default PageHeader;
