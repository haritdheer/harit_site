import React, { useState } from "react";
import CustomContainer from "../../containers/customContainer";

const AboutPageLeft = () => {
  const [text, setText] = useState(
    "Hi there! I'm a Full Stack Developer with a passion for creating innovative solutions to complex problems. With over 1.5 years of experience in the industry, I've honed my skills in both <span class='text-cyan-400'>Frontend</span> and <span class='text-cyan-400'>Backend</span> development, and have worked with a range of technologies.<br /><br/>As a developer, I thrive on the challenge of taking an idea from concept to reality. Whether it's building a new website from scratch or improving an existing platform, I'm always excited to roll up my sleeves and get to work. I'm a <span class='text-cyan-400'>quick learner</span> and enjoy staying up-to-date on the latest trends and best practices in the industry.<br /><br/>In addition to my technical skills, I'm a strong <span class='text-cyan-400'>communicator</span> and enjoy <span class='text-cyan-400'>collaborating</span> with others to achieve our shared goals. I'm able to work independently, but also enjoy being part of a team and learning from my colleagues.<br /><br/>Outside of work, I enjoy exploring new <span class='text-cyan-400'>technologies</span> and <span class='text-cyan-400'>experimenting</span> with personal coding projects. When I'm not coding, you can find me hiking, cooking, or spending time with my family and friends."
  );
  return (
    <CustomContainer className={"w-1/2"}>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </CustomContainer>
  );
};

export default AboutPageLeft;
