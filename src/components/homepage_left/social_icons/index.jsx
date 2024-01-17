import React, { useState } from "react";
import CustomContainer from "../../../containers/customContainer";
import { LuGithub, LuInstagram, LuFacebook, LuLinkedin } from "react-icons/lu";
import { FaSnapchat } from "react-icons/fa6";
import CustomLink from "../../custom_link/customLink";

const SocialIcons = () => {
  const [links, setLinks] = useState({
    github: "https://github.com/kamalbhaiii",
    instagram: "https://instagram.com/kamalbhaiii",
    facebook: "https://www.facebook.com/profile.php?id=100003952759515",
    linkedin: "https://linkedin.com/in/kamalsharma05",
    snapchat: "https://snapchat.com/add/kamalbhaiii",
  });
  return (
    <CustomContainer className={"text-2xl flex flex-col gap-y-7"}>
      <CustomLink to={links.github}>
        <LuGithub />
      </CustomLink>
      <CustomLink to={links.instagram}>
        <LuInstagram />
      </CustomLink>
      <CustomLink to={links.facebook}>
        <LuFacebook />
      </CustomLink>
      <CustomLink to={links.linkedin}>
        <LuLinkedin />
      </CustomLink>
      <CustomLink to={links.snapchat}>
        <FaSnapchat />
      </CustomLink>
    </CustomContainer>
  );
};

export default SocialIcons;
