import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import UseContext from "./demo/useContext";
import UseRef from "./demo/useRef";
import UserReducer from "./demo/useReducer";
import UseEffect from "./demo/useEffect";
import Project from "./demo/project";
import ReactDnd from "./demo/react-dnd";
import { observe } from "./demo/react-dnd/game";

ReactDOM.render(
  <Router>
    {/* <React.StrictMode> */}
    <Switch>
      {/* <Route path="/project">
        <Project />
      </Route> */}
      {/* <Route path="/reactDnd">
        <ReactDnd knightPosition={[1, 7]} />
      </Route> */}
      <Route path="/useEffect">
        <UseEffect />
      </Route>
      <Route path="/reducer">
        <UserReducer />
      </Route>
      <Route path="/context">
        <UseContext />
      </Route>
      <Route path="/ref">
        <UseRef />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>

    {/* </React.StrictMode> */}
  </Router>,
  document.getElementById("root")
);

// 要测试react-dnd的时候把下面这个打开
// observe((knightPosition) =>
//   ReactDOM.render(
//     <ReactDnd knightPosition={knightPosition} />,
//     document.getElementById("root")
//   )
// );

// ReactDOM.render(
//   <ReactDnd knightPosition={[1,7]} />,
//   document.getElementById("root")
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
