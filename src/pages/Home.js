import React, { Fragment, useContext, Suspense } from "react";
import MainContext from "../context/mainContext";
import SearchField from "../components/SearchField";

import { Row, Col } from "antd";
import { Layout } from "antd";
const { Content } = Layout;

const IconList = React.lazy(() => import("../components/Icons/IconList"));
const Home = () => {
  const { searchFieldText } = useContext(MainContext);

  return (
    <Fragment>
      <Layout className="layout">
        <Content style={{ padding: "5rem" }}>
          <Row>
            <Col span={12} offset={6}>
              <SearchField />
            </Col>
          </Row>
        </Content>
      </Layout>

      <Row style={{ marginTop: "2rem" }}>
        <Col span={16} offset={4}>
          <Suspense fallback={<div>Loading...</div>}>
            <IconList filter={searchFieldText} />
          </Suspense>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Home;
