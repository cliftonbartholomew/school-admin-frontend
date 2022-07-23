import React from "react";
import { Card, Button, Space, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
function StudentsTable(props) {
  const columns = [
    {
      title: "Student Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Courses",
      dataIndex: "courses",
      key: "courses",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "Register",
      key: "register",
      dataIndex: "register",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

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
    <Card
      title="Students"
      extra={
        <Button type="primary" icon={<PlusOutlined />}>
          Add New
        </Button>
      }
    >
      <Table columns={columns} dataSource={data} />;
    </Card>
  );
}

export default StudentsTable;
