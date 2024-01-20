import React, { useState } from "react";
import PageHeader from "../page_header";
import CustomTabVertical from "../custom_tab/custom_tab_vertical";

const Educationpage = () => {
  const [data, setData] = useState([
    {
      id: 0,
      label: "Bachelors of Engineering (Computer Engg.)",
      at: "GTU, Ahmedabad",
      atUrl: "https://www.gtu.ac.in",
      duration: "Aug 2019 - June 2023",
      content:
        "<ol><li>Responsibility-1</li><li>Responsibility-2</li><li>Responsibility-3</li><li>Responsibility-4</li></ol>",
    },
    {
      id: 1,
      label: "AISSCE",
      at: "DCHS, Surat",
      atUrl: "https://www.dchs.org.in",
      duration: "Mar 2018 - Apr 2019",
      content:
        "<ol><li>Responsibility-1</li><li>Responsibility-2</li><li>Responsibility-3</li><li>Responsibility-4</li></ol>",
    },
    {
      id: 2,
      label: "AISSE",
      at: "DCHS, Surat",
      atUrl: "https://www.dchs.org.in",
      duration: "Mar 2016 - Apr 2017",
      content:
        "<ol><li>Responsibility-1</li><li>Responsibility-2</li><li>Responsibility-3</li><li>Responsibility-4</li></ol>",
    },
  ]);
  return (
    <PageHeader heading="What I've Studied" headingId="03">
      <CustomTabVertical tabs={data} />
    </PageHeader>
  );
};

export default Educationpage;
