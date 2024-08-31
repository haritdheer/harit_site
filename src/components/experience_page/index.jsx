import React, { useState } from "react";
import PageHeader from "../page_header";
import CustomTabVertical from "../custom_tab/custom_tab_vertical";
import CustomList from "../custom_list";
import CustomTabHorizontal from "../custom_tab/custom_tab_horizontal";
import { useTranslation } from "react-i18next";

const Experiencepage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([
    {
      id: 0,
      label: "Software Developer Intern",
      at: "Modgenics, Hyderabad",
      atUrl: "https://www.modgenics.co",
      duration: "Feb 2023 - Sept 2023",
      content: (
        <CustomList
          items={[
            "Translating Wireframes and PSD Designs into functional web apps using MERN / Mysql.",
            "Binding of UI elements to JavaScript object models.",
            "Creating RESTful services with Node.js.",
            "Create Unit and Integration tests to ensure the QOC.",
          ]}
        />
      ),
    },
    {
      id: 1,
      label: "Software Developer Associate",
      at: "Blackcoffer, New Delhi",
      atUrl: "https://blackcoffer.com",
      duration: "July 2022 - Dec 2022",
      content: (
        <CustomList
          items={[
            "Working on MERN Stack as Full Time Intern.",
            "Have done front-end work on various client projects.",
            "Currently working on designing backend API’s for different projects.",
          ]}
        />
      ),
    },
    {
      id: 2,
      label: "Data Science and Analytics Intern",
      at: "DevTown, Bangalore",
      atUrl: "https://devtown.in",
      duration: "Dec 2021 - Feb 2022",
      content: (
        <CustomList
          items={[
            "Worked on different Machine Algorithms.",
            "Did analysis of various datasets.",
            "Made a major project on Students Entrepreneurial Skill Prediction.",
          ]}
        />
      ),
    },
    {
      id: 3,
      label: "AI / ML Intern",
      at: "ETG, Pune",
      atUrl: "https://elitetechnogroups.com",
      duration: "Aug 2021 - Sept 2021",
      content: (
        <CustomList
          items={[
            "Learnt basics of Python, Machine Learning.",
            "Made a minor project on Inventory Management System using Python.",
            "Made a major project on Fake News Detection and its deployment using Flask.",
          ]}
        />
      ),
    },
    {
      id: 4,
      label: "Frontend Developer Intern",
      at: "Skill Safari, Bangalore",
      atUrl: "https://skillsafari.in",
      duration: "Aug 2020 - Nov 2020",
      content: (
        <CustomList
          items={[
            "Learnt HTML, CSS and JavaScript.",
            "A front-end framework named Bootstrap 5 was used.",
            "Made a major project on the clone of PhonePe Website.",
          ]}
        />
      ),
    },
  ]);

  return (
    <PageHeader
      heading={t("experiencePageHeading")}
      headingId="02"
      childrenClass={"items-center"}
    >
      <CustomTabVertical tabs={data} />
      <CustomTabHorizontal tabs={data} />
    </PageHeader>
  );
};

export default Experiencepage;
