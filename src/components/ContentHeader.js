import React from "react";
import { PageHeader } from "antd";

function ContentHeader() {
  const routes = [
    {
      path: "index",
      breadcrumbName: "Setup",
    },
    {
      path: "first",
      breadcrumbName: "Students",
    },
  ];
  return (
    <PageHeader
      className="site-page-header"
      title="Students Setup"
      breadcrumb={{ routes }}
      ghost={false}
    />
  );
}

export default ContentHeader;
