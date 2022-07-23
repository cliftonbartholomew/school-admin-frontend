import React from "react";
import { EditOutlined, TableOutlined } from "@ant-design/icons";

import { Layout, Menu } from "antd";

function SideMenu(props) {
  const { Header, Sider } = Layout;
  const menuItems = [
    {
      key: "sub1",
      icon: React.createElement(EditOutlined),
      label: "Setup",
      children: [
        {
          key: "sub2",
          label: "Teachers",
        },
        {
          key: "sub3",
          label: "Students",
        },
        {
          key: "sub4",
          label: "Courses",
        },
        {
          key: "sub5",
          label: "Grades",
        },
      ],
    },
    {
      key: "sub6",
      icon: React.createElement(TableOutlined),
      label: "Markbook",
    },
  ];
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
          borderRight: 0,
        }}
        items={menuItems}
      />
    </Sider>
  );
}

export default SideMenu;
