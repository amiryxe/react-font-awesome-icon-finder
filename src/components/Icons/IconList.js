import React, { useContext, useState, useEffect } from "react";
import IconItem from "./IconItem";
import { Row, Col } from "antd";
import MainContext from "../../context/mainContext";
import InfiniteScroll from "react-infinite-scroll-component";

const IconList = ({ filter }) => {
  const { iconList } = useContext(MainContext);

  const data = iconList.filter((item) => item.match(filter));

  const [count, setCount] = useState({
    prev: 0,
    next: 24,
  });

  const [hasMore, setHasMore] = useState(true);

  const [current, setCurrent] = useState(data.slice(count.prev, count.next));

  // preparing data
  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)));
    }, 1000);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));
  };

  return (
    <InfiniteScroll
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <Row>
        {current &&
          current.map((item, index) => (
            <Col key={index} span={4} style={{ padding: "1rem" }}>
              <IconItem icon={item} />
            </Col>
          ))}
      </Row>
    </InfiniteScroll>
  );
};

export default IconList;
