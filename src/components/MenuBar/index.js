import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const MenuBar = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Font awesome finder</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default MenuBar;
