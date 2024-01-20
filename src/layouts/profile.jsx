import React from "react";
import ProfileNavbar from "../components/navbar/profileNavbar";
import CustomContainer from "../containers/customContainer";
import HomepageRight from "../components/homepage_right";
import HomepageLeft from "../components/homepage_left";
import CustomAlert from "../components/custom_alert/customAlert";
import ParticleBackground from "../components/particle_component/particle_background";

const ProfileLayout = ({ children }) => {
  return (
    <CustomContainer className="h-screen">
      <ParticleBackground />
      <ProfileNavbar className={"h-1/8"} />
      <CustomContainer className="flex text-white h-7/8">
        <CustomAlert
          message={"This website is under development. - Kamal S."}
          type={"danger"}
        />
        <CustomContainer className="w-1/8 overflow-hidden z-10">
          <HomepageLeft />
        </CustomContainer>
        <CustomContainer className="w-7/8 p-24 overflow-auto z-10">
          {children}
        </CustomContainer>
        <CustomContainer className="w-1/8 overflow-hidden z-10">
          <HomepageRight />
        </CustomContainer>
      </CustomContainer>
    </CustomContainer>
  );
};

export default ProfileLayout;
