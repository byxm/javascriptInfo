import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import UseContext from "./demo/useContext";
import UseRef from "./demo/useRef";
import UserReducer from "./demo/useReducer";
import UseEffect from "./demo/useEffect";
import RenderProps from "./demo/renderProps";
import CustomeHook from "./demo/customHook";
import ManageModal from './demo/manageModal'
import Project from "./demo/project";
import ReactDnd from "./demo/react-dnd";
import { observe } from "./demo/react-dnd/game";


import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider store={store}>
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
        <Route path="/renderProps">
          <RenderProps />
        </Route>
        <Route path="/customHook">
          <CustomeHook />
        </Route>
        <Route path="/manageModal">
          <ManageModal />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>

      {/* </React.StrictMode> */}
    </Router>
  </Provider>,
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
