import React, { useState } from "react";
import PageHeader from "../page_header";
import CustomContainer from "../../containers/customContainer";
import CustomButtonAnchor from "../custom_button/customButtonAnchor";

const Contactpage = () => {
  const [mail, setMail] = useState("coding.coding.everyday@gmail.com");
  return (
    <PageHeader
      heading="Hack to reach me!"
      headingId="04"
      className={"h-full"}
      childrenClass={"w-full h-full"}
    >
      <CustomContainer
        className={
          "h-full flex flex-col items-center justify-center gap-y-5 md:gap-y-10"
        }
      >
        <h3 className="text-3xl md:text-6xl font-bold">Get In Touch</h3>
        <p className="w-full md:w-1/2 text-center text-md">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <CustomButtonAnchor href={`mailto:${mail}`} title={"Say Hello!"} />
      </CustomContainer>
    </PageHeader>
  );
};

export default Contactpage;
