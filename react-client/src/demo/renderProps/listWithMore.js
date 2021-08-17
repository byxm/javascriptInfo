import React, { useState, useCallback } from "react";
import { Popover } from "antd";
import data from "./data";

const ListWithMore = ({ data, max, renderItem }) => {
  const [nextCount, setNextCount] = useState(max);

  const renderElements = data.map((el) => renderItem(el));
  const showElement = renderElements.slice(0, nextCount);

  const handleAddMoreData = () => {
    setNextCount(nextCount + max);
  };

  return (
    <>
      {data.length ? (
        <>
          {showElement}
          <h4 onClick={handleAddMoreData}>click here show more {max}</h4>
          <Popover content={<div>{renderElements.slice(nextCount)}</div>}>
            here is more data
          </Popover>
        </>
      ) : null}
    </>
  );
};

const ShowListWithMore = () => {
  return (
    <>
      <div>
        <h2>this is show one</h2>
        <ListWithMore
          data={data}
          max={3}
          renderItem={(user) => {
            return (
              <div>
                <p>{user.name}</p>
                <p>{user.job}</p>
              </div>
            );
          }}
        />
      </div>
      <div>
        <h2>this is show two</h2>
        <ListWithMore
          data={data}
          max={5}
          renderItem={(user) => {
            return (
              <div>
                <p>{user.id}</p>
                <p>{user.city}</p>
              </div>
            );
          }}
        />
      </div>
    </>
  );
};

export default ShowListWithMore;
