import React from "react";
import PageHeader from "../page_header";
import CustomContainer from "../../containers/customContainer";
import AboutPageLeft from "./about_page_left";
import AboutPageRight from "./about_page_right";

const Aboutpage = () => {
  return (
    <PageHeader heading={"About Me"} headingId="01">
      <CustomContainer className={"flex"}>
        <AboutPageLeft />
        <AboutPageRight />
      </CustomContainer>
    </PageHeader>
  );
};

export default Aboutpage;
