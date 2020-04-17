/**
 *  Created by daiwenjuan on 2020/4/16 09:07.
 */
import { applyMiddleware, createStore } from "redux";
import initReducers from "./reducers";
import thunkMiddleware from "redux-thunk";
export default function () {
  const reducers=initReducers()
  return createStore(reducers, applyMiddleware(thunkMiddleware));
};
