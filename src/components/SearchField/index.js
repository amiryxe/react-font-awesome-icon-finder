import React, { useState } from "react";
import MainContext from "../../context/mainContext";

import { Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Title } = Typography;

const SearchField = (props) => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <MainContext.Provider value={{ searchField: text }}>
        <Title level={3}>Search</Title>
        <Input
          size="large"
          placeholder="Enter a text to search"
          onChange={changeHandler}
          value={text}
          prefix={<SearchOutlined />}
        />
      </MainContext.Provider>
    </div>
  );
};

export default SearchField;
