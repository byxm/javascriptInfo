import { useRef, useState } from "react";

const useSinglon = (callback) => {
  const singlon = useRef(false);
  if (singlon.current) return;
  callback();
  singlon.current = true;
};

const MockConstructor = () => {
  const [count, setCount] = useState(0);

  useSinglon(() => {
    console.log("构造函数");
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <div>{count}</div>
    </>
  );
};

export default MockConstructor;
