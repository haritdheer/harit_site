import React, { useState } from "react";
import CustomContainer from "../../containers/customContainer";

const AboutPageLeft = () => {
  const [text, setText] = useState(
    "<p>Greetings! I am a seasoned professional with a versatile background in Full Stack Development and Data Science, fueled by a fervent enthusiasm for <span class='text-cyan-400'>DevOps</span> and <span class='text-cyan-400'>Blockchain Development</span>. With expertise in both front-end and back-end technologies, I create innovative solutions that seamlessly integrate with the digital landscape.</p><br/><br/><p>In Full Stack Development, I specialize in crafting robust and scalable applications, ensuring efficient user interfaces and server-side performance. My journey in <span class='text-cyan-400'>Data Science</span> involves extracting actionable insights from complex datasets, contributing to data-driven solutions that drive businesses forward.</p><br/><br/><p>As an ardent <span class='text-cyan-400'>DevOps</span> enthusiast, I champion collaboration for streamlined workflows and automated processes. Venturing into <span class='text-cyan-400'>Blockchain Development</span>, I explore solutions for transparency and efficiency in applications, from financial systems to supply chain management.</p><br/><br/><p>In every facet of my journey, I stay at the forefront of tech advancements. Whether mastering languages, experimenting with frameworks, or staying abreast of trends in <span class='text-cyan-400'>DevOps</span> and blockchain, I contribute to cutting-edge projects with a passion for pushing technology's boundaries.</p><br/><br/><p>My mission is to bring together Full Stack Development, <span class='text-cyan-400'>Data Science</span>, <span class='text-cyan-400'>DevOps</span>, and <span class='text-cyan-400'>Blockchain</span> to create solutions meeting today's demands and anticipating tomorrow's challenges. Eager to contribute skills, experience, and passion to projects shaping the digital future.</p>"
  );
  return (
    <CustomContainer className={"text-center md:w-1/2"}>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </CustomContainer>
  );
};

export default AboutPageLeft;
