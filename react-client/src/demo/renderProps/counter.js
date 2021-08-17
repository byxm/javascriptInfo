import React, { useState, useEffect, useCallback } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);


  const increaseCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decreaseCount = useCallback(() => {
    setCount(count - 1);
  }, [ count ]);

  return props.children({
    count,
    increaseCount,
    decreaseCount,
  });
};

const RenderCounter = () => {
  return (
    <>
      <Counter>
        {({ count, increaseCount, decreaseCount }) => {
          return (
            <div style={{ backgroundColor: "red" }}>
              <button onClick={increaseCount}>Increase</button>
              <button onClick={decreaseCount}>Decrease</button>
              <p>{count}</p>
            </div>
          );
        }}
      </Counter>
    </>
  );
};

export default RenderCounter;
