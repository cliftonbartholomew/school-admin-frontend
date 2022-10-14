import React from "react";
import { Card, Row, Col, Select, Space, Input, Button } from "antd";

function FilterCard(props) {
  const { Option } = Select;

  return (
    <Card>
      <Row>
        <Col span={16}>
          <Space align="center" size="middle">
            <span>Name Filter</span>
            <Input placeholder="Enter Student Name" />
            <span> Grade Filter</span>
            <Select defaultValue="Choose a grade" style={{ width: 150 }}>
              <Option value="8">8</Option>
              <Option value="9">9</Option>
              <Option value="10">10</Option>
              <Option value="11">11</Option>
              <Option value="12">12</Option>
            </Select>
          </Space>
        </Col>
        <Col span={8} flex="100%">
          <Space style={{ width: "100%", justifyContent: "right" }}>
            <Button>Reset</Button>
            <Button type="primary">Query</Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

export default FilterCard;
