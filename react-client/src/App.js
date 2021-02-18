import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [sum, setSum] = useState(0);

  useEffect(() => {
    /********* jsonp跨域 **********/
    // jsonp({
    //   url: 'http://localhost:7001/test',
    //   params: { wd: 'Iloveyou' },
    //   callback: 'show'
    // }).then((res) => {
    //   console.log('res', res);
    // })
  }, []);

  function stopRender(timeLine) {
    // function startCompute() {
    for (let i = 0; i < 1e10; i++) {}
    // }

    // startCompute();

    // window.requestIdleCallback(stopRender);
    // stopRender(i++);
  }

  function blockRender() {
    // window.requestIdleCallback(stopRender); // 能够快速的相应用户的交互，让页面先渲染
    setTimeout(() => {
      stopRender();
    }, 0)
    // stopRender();
  }

  // blockRender();

  function addSum() {
    sum++
    setSum(sum) 
  }
  // blockRender();

  return (
    <div className="App">
      <header className="App-header">
        <button className="" onClick={blockRender}>
          阻塞渲染按钮
        </button>
        <button className="">第二个按钮</button>
        <button onClick={addSum}>加一</button>
        {sum}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
