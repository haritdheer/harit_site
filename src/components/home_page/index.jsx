import React, { useState } from "react";
import CustomContainer from "../../containers/customContainer";
import classNames from "classnames";
import CustomTypewriter from "../custom_typewriter";
import CustomButton from "../custom_button/customButton";

const Homepage = ({ className }) => {
  const [data, setData] = useState({
    name: "Kamal Sharma",
    designation: [
      "Full Stack Developer",
      "Data Scientist",
      "DevOps Engineer",
      "App Developer",
      "Blockchain Developer",
    ],
    bio: "About Hi there! I'm a Full Stack Developer with a passion for creating innovative solutions to complex problems. I've honed my skills in both front-end and back-end development, and have worked with a range of technologies of various domains.",
  });
  return (
    <CustomContainer
      className={classNames(
        className,
        "flex flex-col gap-y-5 p-24 tracking-widest"
      )}
    >
      <span className="text-cyan-400">Hi, my name is</span>
      <h1 className="text-7xl font-semibold">{data?.name}.</h1>
      <h2 className="text-7xl font-semibold text-gray-300">
        I am{" "}
        <CustomTypewriter cursor={true} loop={true} words={data?.designation} />
        .
      </h2>
      <p className="text-gray-300 w-1/2 text-pretty">{data?.bio}</p>
      {/* TODO: Pending to add onclick in button added below */}
      <CustomButton className={"w-max mt-5"} title={"Check out my profile!"} />
    </CustomContainer>
  );
};

export default Homepage;
