import React from "react";
import classNames from "classnames";
import CustomContainer from "../../containers/customContainer";
import NavbarRight from "./navbar_right";
import NavbarLeft from "./navbar_left";

const ProfileNavbar = ({ className }) => {
  return (
    <CustomContainer
      className={classNames(
        className,
        "sticky top-0 px-12 flex items-center justify-between text-white"
      )}
    >
      <NavbarLeft />
      <NavbarRight />
    </CustomContainer>
  );
};

export default ProfileNavbar;
