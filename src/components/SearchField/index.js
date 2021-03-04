import React from "react";
import { Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Title } = Typography;

const SearchField = () => {
  return (
    <div>
      <Title level={3}>Search</Title>
      <Input
        size="large"
        placeholder="Enter a text to search"
        prefix={<SearchOutlined />}
      />
    </div>
  );
};

export default SearchField;
