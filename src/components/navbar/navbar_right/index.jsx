import React, { useState } from "react";
import CustomContainer from "../../../containers/customContainer";
import CustomNavigation from "../../custom_navigation/customNavigation";
import CustomButton from "../../custom_button/customButton";
import { Navigate, useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const [compos, setCompos] = useState([
    { id: "01", name: "About", utm: "/about" },
    { id: "02", name: "Experience", utm: "/experience" },
    { id: "03", name: "Education", utm: "/education" },
    { id: "04", name: "Contact", utm: "/contact" },
  ]);

  const navigate = useNavigate();
  return (
    <CustomContainer
      className={"flex gap-x-8 text-sm items-center tracking-wider"}
    >
      {compos.map((val, key) => {
        return (
          <CustomNavigation
            href={val?.utm}
            className={"hover:bottom-0 flex gap-x-2"}
            key={key}
          >
            <span className="text-cyan-400">{val.id}.</span> {val?.name}
          </CustomNavigation>
        );
      })}
      <CustomButton
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1ef-c4SUUXyRYcVQZg8I8Uo0v8nEgYwY2/view?usp=sharing",
            "_blank"
          );
        }}
        title={"Resume"}
      />
    </CustomContainer>
  );
};

export default NavbarRight;
