import React from "react";
import { Card, Row, Col, Select, Space, Input, Button } from "antd";

function FilterCard(props) {
  const { Option } = Select;

  return (
    <Card>
      <Row>
        <Col span={12}>
          <Space>
            <p>Name Filter</p>
            <Input placeholder="Enter Student Name" />
          </Space>
        </Col>
        <Col span={4}>
          <Select
            defaultValue="Choose a grade"
            style={{ width: 120 }}
            bordered={false}
          >
            <Option value="8">8</Option>
            <Option value="9">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
            <Option value="12">12</Option>
          </Select>
        </Col>
        <Col span={4}></Col>
        <Col span={4}>
          <Button>Reset</Button>
          <Button type="primary">Query</Button>
        </Col>
      </Row>
    </Card>
  );
}

export default FilterCard;
