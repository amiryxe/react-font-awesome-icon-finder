import React from "react";
import MenuBar from "../components/MenuBar";

import { Row, Col } from "antd";
import { Layout } from "antd";
const { Content } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <MenuBar />
      <Content style={{ padding: "5rem" }}>
        <Row>
          <Col span={12} offset={6}>
            col-12 col-offset-6
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
