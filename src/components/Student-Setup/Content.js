import React from "react";

import FilterCard from "./FilterCard";
import StudentsTable from "./StudentsTable";
import { Layout, Space } from "antd";

function Content(props) {
  //get data from backend here
  const data = [
    {
      key: "1",
      name: "John Brown",
      grade: 11,
      courses:
        "English, Afrikaans, Physical Sciences, Information Technology, Mathematics, Life Sciences",
      register: "R",
    },
    {
      key: "2",
      name: "Jim Green",
      grade: 11,
      courses:
        "English, Afrikaans, Physical Sciences, Information Technology, Mathematics, Life Sciences",
      register: "R",
    },
    {
      key: "3",
      name: "Joe Black",
      grade: 11,
      courses:
        "English, Afrikaans, Physical Sciences, Information Technology, Mathematics, Life Sciences",
      register: "R",
    },
  ];

  return (
    <Layout
      style={{
        padding: "20px 0",
      }}
    >
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <FilterCard />
        <StudentsTable data={data} />
      </Space>
    </Layout>
  );
}

export default Content;
