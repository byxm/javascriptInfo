import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from 'redux-thunk'

const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "createNumber":
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
};

const composedEnhanced = applyMiddleware(thunkMiddleWare);

const store = createStore(counterReducer, composedEnhanced);

export default store;