import React, { useReducer } from "react";

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

export default ReducerDemo
