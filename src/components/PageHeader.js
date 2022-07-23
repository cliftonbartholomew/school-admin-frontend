import React from "react";
import { Layout } from "antd";

function PageHeader() {
  const { Header } = Layout;
  return (
    <Header className="header">
      <div className="logo" />
    </Header>
  );
}

export default PageHeader;
