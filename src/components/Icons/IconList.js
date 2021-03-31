import React, { useContext } from "react";
import IconItem from "./IconItem";
import { Row, Col } from "antd";
import MainContext from "../../context/mainContext";

const IconList = () => {
  const { iconList } = useContext(MainContext);

  return (
    <Row>
      {[...iconList].splice(0, 12).map((item, index) => (
        <Col key={index} span={4} style={{ padding: "1rem" }}>
          <IconItem icon={item} />
        </Col>
      ))}
    </Row>
  );
};

export default IconList;
