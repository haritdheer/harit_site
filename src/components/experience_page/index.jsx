import React, { useState } from "react";
import PageHeader from "../page_header";
import CustomTabVertical from "../custom_tab/custom_tab_vertical";

const Experiencepage = () => {
  const [data, setData] = useState([
    {
      id: 0,
      label: "Software Developer Intern",
      at: "Modgenics, Hyderabad",
      atUrl: "https://www.modgenics.co",
      duration: "Feb 2023 - Sept 2023",
      content:
        "<ol><li>Responsibility-1</li><li>Responsibility-2</li><li>Responsibility-3</li><li>Responsibility-4</li></ol>",
    },
    {
      id: 1,
      label: "Software Developer Associate",
      at: "Blackcoffer, New Delhi",
      atUrl: "https://blackcoffer.com",
      duration: "July 2022 - Dec 2022",
      content:
        "<ul><li>Responsibility-1</li><li>Responsibility-2</li><li>Responsibility-3</li><li>Responsibility-4</li></ul>",
    },
    {
      id: 2,
      label: "Data Science and Analytics Intern",
      at: "DevTown, Bangalore",
      atUrl: "https://devtown.in",
      duration: "Dec 2021 - Feb 2022",
      content:
        "<ul><li>Responsibility-1</li><li>Responsibility-2</li><li>Responsibility-3</li><li>Responsibility-4</li></ul>",
    },
    {
      id: 3,
      label: "AI / ML Intern",
      at: "ETG, Pune",
      atUrl: "https://elitetechnogroups.com",
      duration: "Aug 2021 - Sept 2021",
      content:
        "<ul><li>Responsibility-1</li><li>Responsibility-2</li><li>Responsibility-3</li><li>Responsibility-4</li></ul>",
    },
    {
      id: 4,
      label: "Frontend Developer Intern",
      at: "Skill Safari, Bangalore",
      atUrl: "https://skillsafari.in",
      duration: "Aug 2020 - Nov 2020",
      content:
        "<ul><li>Responsibility-1</li><li>Responsibility-2</li><li>Responsibility-3</li><li>Responsibility-4</li></ul>",
    },
  ]);

  return (
    <PageHeader
      heading="Where I've Worked"
      headingId="02"
      childrenClass={"items-center"}
    >
      <CustomTabVertical tabs={data} />
    </PageHeader>
  );
};

export default Experiencepage;
