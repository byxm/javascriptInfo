import React, { useReducer } from "react";
import { count1, es1Count } from './esModule1'
import { count2, es2Count } from './esModule2'

function myReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "sub":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return {
        ...state,
      };
  }
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(myReducer, { count: 0 });
  // es1Count(10)
  // console.log('outEs1', count1);
  // es2Count(10)
  // console.log('outEs2', count2);

  

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        状态按钮
      </button>
      <p>{state.count}</p>
    </div>
  );
}

export default ReducerDemo;
