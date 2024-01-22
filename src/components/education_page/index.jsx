import React, { useState } from "react";
import PageHeader from "../page_header";
import CustomTabVertical from "../custom_tab/custom_tab_vertical";
import CustomList from "../custom_list";
import CustomTabHorizontal from "../custom_tab/custom_tab_horizontal";

const Educationpage = () => {
  const [data, setData] = useState([
    {
      id: 0,
      label: "Bachelors of Engineering (Computer Engg.)",
      at: "GTU, Ahmedabad",
      atUrl: "https://www.gtu.ac.in",
      duration: "Aug 2019 - June 2023",
      content: (
        <CustomList
          items={[
            "Developed proficiency in programming languages such as [List languages, e.g., Java, C++, Python]",
            "Collaborated with peers on group projects, fostering teamwork and communication skills",
            "Applied academic knowledge in a practical setting during internships or work experiences.",
            "Engaged in relevant extracurricular activities, such as coding competitions, hackathons, or computer science clubs.",
          ]}
        />
      ),
    },
    {
      id: 1,
      label: "AISSCE",
      at: "DCHS, Surat",
      atUrl: "https://www.dchs.org.in",
      duration: "Mar 2018 - Apr 2019",
      content: (
        <CustomList
          items={[
            "Achieved a commendable academic performance with a focus on the PCM subjects.",
            "Successfully completed advanced mathematics courses, showcasing strong analytical and problem-solving skills.",
            "Engaged in practical work and projects related to Physics and Chemistry, demonstrating hands-on application of theoretical knowledge.",
            "Gained basic technology and computing skills, which complement the scientific knowledge acquired during high school.",
          ]}
        />
      ),
    },
    {
      id: 2,
      label: "AISSE",
      at: "DCHS, Surat",
      atUrl: "https://www.dchs.org.in",
      duration: "Mar 2016 - Apr 2017",
      content: (
        <CustomList
          items={[
            "Emphasized proficiency in core subjects such as Mathematics, Science, English, and others as per the curriculum.",
            "Engaged in extracurricular activities, demonstrating a well-rounded skill set beyond academics.",
            "Developed strong problem-solving abilities through coursework, particularly in subjects like Mathematics and Science",
          ]}
        />
      ),
    },
  ]);
  return (
    <PageHeader heading="What I've Studied" headingId="03">
      <CustomTabVertical tabs={data} />
      <CustomTabHorizontal tabs={data} />
    </PageHeader>
  );
};

export default Educationpage;
