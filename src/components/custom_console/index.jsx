import React, { useState } from "react";
import "./styles.css"; // Make sure to create a corresponding CSS file
import CustomContainer from "../../containers/customContainer";
import { IoCloseCircleOutline } from "react-icons/io5";

const CustomConsole = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleConsole = () => {
    setIsVisible(!isVisible);
  };

  return (
    <CustomContainer>
      <button onClick={toggleConsole} className="console-button">
        Console
      </button>
      <div className={`dark-console ${isVisible ? "visible" : ""}`}>
        <div className="console-content">
          <CustomContainer className={"flex justify-end"}>
            <IoCloseCircleOutline
              className="cursor-pointer"
              onClick={toggleConsole}
            />
          </CustomContainer>
          <p>Welcome to the console!</p>
          <p>The work of console is under process.</p>
        </div>
      </div>
    </CustomContainer>
  );
};

export default CustomConsole;
