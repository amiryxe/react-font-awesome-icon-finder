import React, { useContext } from "react";
import IconItem from "./IconItem";
import { Row, Col } from "antd";
import MainContext from "../../context/mainContext";

const IconList = () => {
  const { iconList } = useContext(MainContext);

  return (
    <Row>
      {[...iconList].map((item, index) => (
        <Col span={4} style={{ padding: "1rem" }}>
          <IconItem key={index} icon={item} />
        </Col>
      ))}
    </Row>
  );
};

export default IconList;
