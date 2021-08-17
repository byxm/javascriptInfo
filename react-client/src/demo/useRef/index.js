import { useRef, useState, useEffect, useCallback } from "react";
import MockConstructor from './mockConstructor'

const TestUseRef = () => {
  const [timeVal, setTimeVal] = useState(0);

  const timer = useRef(null);
  //   const [timer, setTimer] = useState(null);

  const startTimer = useCallback(() => {
    timer.current = setInterval(() => {
      setTimeVal((val) => val + 1);
    }, 1000);
    console.log("timer reference", timer);
    //     setTimer(t);
  }, [timer]);
  const pauseTimer = useCallback(() => {
    //     console.log("timer reference", timer);
    clearInterval(timer.current);
  }, [timer]);
  //   const pauseTimer = () => {
  //     console.log("timer reference------", timer);
  //     clearInterval(timer);
  //   };

  return (
    <>
      <div onClick={startTimer}>开始计数</div>
      <div onClick={pauseTimer}>停止计数</div>
      <p>time: {timeVal}</p>
      <p onClick={() => setTimeVal(timeVal + 1)}>click me</p>
      <MockConstructor />
    </>
  );
};

export default TestUseRef;
