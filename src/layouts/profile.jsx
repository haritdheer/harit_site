import React from "react";
import ProfileNavbar from "../components/navbar/profileNavbar";
import CustomContainer from "../containers/customContainer";
import HomepageRight from "../components/homepage_right";
import HomepageLeft from "../components/homepage_left";
import CustomAlert from "../components/custom_alert/customAlert";

const ProfileLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-sky-950 to-sky-900  h-screen">
      <ProfileNavbar className={"h-1/8"} />
      <CustomContainer className="flex text-white h-7/8">
        <CustomAlert
          message={"This website is under development. - Kamal S."}
          type={"danger"}
        />
        <CustomContainer className="w-1/8 overflow-hidden">
          <HomepageLeft />
        </CustomContainer>
        <CustomContainer className="w-7/8 p-24 overflow-auto">
          {children}
        </CustomContainer>
        <CustomContainer className="w-1/8 overflow-hidden">
          <HomepageRight />
        </CustomContainer>
      </CustomContainer>
    </div>
  );
};

export default ProfileLayout;
