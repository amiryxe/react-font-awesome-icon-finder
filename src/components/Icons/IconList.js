import React, { Fragment } from "react";
import IconItem from "./IconItem";
import iconNameList from "../../resources/iconNames/list";

const IconList = () => {
  return (
    <Fragment>
      {iconNameList.map((item, index) => (
        <IconItem key={index} icon={item} />
      ))}
    </Fragment>
  );
};

export default IconList;
