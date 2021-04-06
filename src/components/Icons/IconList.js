import React, { useContext } from "react";
import IconItem from "./IconItem";
import { Row, Col } from "antd";
import MainContext from "../../context/mainContext";

const IconList = ({ filter }) => {
  const { iconList } = useContext(MainContext);

  const filteredItems = iconList.filter((itam) => itam.match(filter));

  return (
    <Row>
      {filteredItems.map((item, index) => (
        <Col key={index} span={4} style={{ padding: "1rem" }}>
          <IconItem icon={item} />
        </Col>
      ))}
    </Row>
  );
};

export default IconList;
