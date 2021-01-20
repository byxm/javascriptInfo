import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
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

  function stopRender() {
    for (let i = 0; i < 1e10; i++) {}
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className="" onClick={stopRender}>按钮</button>
        <button className="">第二个按钮</button>
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
