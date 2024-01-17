import React from "react";
import classNames from "classnames";
import CustomContainer from "../../containers/customContainer";

const ProfileNavbar = ({ className }) => {
  return (
    <CustomContainer
      className={classNames(
        className,
        "sticky top-0 px-12 flex items-center justify-between text-white"
      )}
    >
      <CustomContainer>Logo</CustomContainer>
      <CustomContainer>Navbar Components</CustomContainer>
    </CustomContainer>
  );
};

export default ProfileNavbar;
