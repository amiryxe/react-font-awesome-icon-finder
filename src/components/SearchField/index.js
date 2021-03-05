import React, { useState } from "react";
import { Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Title } = Typography;

const SearchField = () => {
  const [searchField, setSearchField] = useState("");

  const handleChangeSearchField = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div>
      <Title level={3}>Search</Title>
      <Input
        size="large"
        placeholder="Enter a text to search"
        onChange={handleChangeSearchField}
        value={searchField}
        prefix={<SearchOutlined />}
      />
    </div>
  );
};

export default SearchField;
