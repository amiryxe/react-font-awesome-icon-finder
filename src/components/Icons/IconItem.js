import React from "react";
import { Card } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const IconItem = ({ icon }) => {
  return (
    <Card
      size="small"
      title={icon}
      extra={<a href="#">copy</a>}
      style={{ width: "100%", display: "inline-block" }}
    >
      <h2 style={{ textAlign: "center", fontSize: "3rem", margin: 0 }}>
        <FontAwesomeIcon icon={icon} />
      </h2>
    </Card>
  );
};

export default IconItem;
