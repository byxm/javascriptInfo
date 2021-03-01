import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import UseContext from "./demo/useContext";
import UserReducer from "./demo/useReducer";
import UseEffect from './demo/useEffect'
import Project from './demo/project'

ReactDOM.render(
  <Router>
    {/* <React.StrictMode> */}
    <Switch>
      {/* <Route path="/project">
        <Project />
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
      <Route path="/">
        <App />
      </Route>
    </Switch>

    {/* </React.StrictMode> */}
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
