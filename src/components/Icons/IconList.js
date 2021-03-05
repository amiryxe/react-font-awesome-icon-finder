import React, { Fragment } from "react";
import IconItem from "./IconItem";
import iconNameList from "../../resources/iconNames/list";
import { Row, Col } from "antd";

const IconList = () => {
  return (
    <Row>
      {iconNameList.map((item, index) => (
        <Col span={8} style={{ padding: "1rem" }}>
          <IconItem key={index} icon={item} />
        </Col>
      ))}
    </Row>
  );
};

export default IconList;
