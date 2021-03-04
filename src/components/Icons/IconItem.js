import React from "react";
import { Card } from "antd";

const IconItem = () => {
  return (
    <Card
      size="small"
      title="Small size card"
      extra={<a href="#">copy</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default IconItem;
