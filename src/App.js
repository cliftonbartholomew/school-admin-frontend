import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";

import Content from "./components/Student-Setup/Content";
import SideMenu from "./components/SideMenu";
import ContentHeader from "./components/ContentHeader";
import PageHeader from "./components/PageHeader";

const App = () => (
  <Layout
    style={{
      height: "100vh",
    }}
  >
    <PageHeader />
    <Layout
      style={{
        height: "100%",
      }}
    >
      <SideMenu />
      <Layout
        style={{
          padding: "20px 20px 0 20px",
        }}
      >
        <ContentHeader />
        <Content />
      </Layout>
    </Layout>
  </Layout>
);

export default App;
