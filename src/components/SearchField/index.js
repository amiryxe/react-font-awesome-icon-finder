import React, { useContext } from "react";
import MainContext from "../../context/mainContext";

import { Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Title } = Typography;

const SearchField = () => {
  const { searchFieldText, setSearchFieldText } = useContext(MainContext);

  return (
    <div>
      <Title level={3}>Search</Title>
      <Input
        size="large"
        placeholder="Enter a text to search"
        onChange={(e) => setSearchFieldText(e.target.value)}
        value={searchFieldText}
        prefix={<SearchOutlined />}
      />
    </div>
  );
};

export default SearchField;
