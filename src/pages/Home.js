import React, { Fragment, useContext } from "react";
import MainContext from "../context/mainContext";

import MenuBar from "../components/MenuBar";
import SearchField from "../components/SearchField";
import IconList from "../components/Icons/IconList";

import { Row, Col } from "antd";
import { Layout } from "antd";
const { Content } = Layout;

const Home = () => {
  const { searchFieldText } = useContext(MainContext);
  return (
    <Fragment>
      <Layout className="layout">
        <MenuBar />
        <Content style={{ padding: "5rem" }}>
          <Row>
            <Col span={12} offset={6}>
              <SearchField />
              <h1>{searchFieldText}</h1>
            </Col>
          </Row>
        </Content>
      </Layout>

      <Row style={{ marginTop: "2rem" }}>
        <Col span={16} offset={4}>
          <IconList />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Home;
