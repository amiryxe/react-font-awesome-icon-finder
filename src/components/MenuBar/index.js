import React from "react";
import { Menu, Layout } from "antd";
const { Header } = Layout;

const MenuBar = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Font awesome finder</Menu.Item>
        <Menu.Item key="2">about</Menu.Item>
      </Menu>
    </Header>
  );
};

export default MenuBar;
