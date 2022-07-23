import React from "react";

import FilterCard from "./FilterCard";
import StudentsTable from "./StudentsTable";
import { Layout, Space } from "antd";

function Content(props) {
  return (
    <Layout
      style={{
        padding: "20px",
      }}
    >
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <FilterCard />
        <StudentsTable />
      </Space>
    </Layout>
  );
}

export default Content;
