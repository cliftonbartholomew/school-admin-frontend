import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";

import Content from "./components/Content";
import SideMenu from "./components/SideMenu";
import ContentHeader from "./components/ContentHeader";
import PageHeader from "./components/PageHeader";

const App = () => (
  <Layout>
    <PageHeader />
    <Layout>
      <SideMenu />
      <Layout>
        <ContentHeader />
        <Content />
      </Layout>
    </Layout>
  </Layout>
);

export default App;
