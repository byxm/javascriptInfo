import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleWare from 'redux-thunk'
import * as allReducer from './reducer';



const composedEnhanced = applyMiddleware(thunkMiddleWare);
const appReducer = combineReducers(allReducer)

const store = createStore(appReducer, composedEnhanced);

export default store;