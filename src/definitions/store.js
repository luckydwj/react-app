/**
 *  Created by daiwenjuan on 2020/4/16 09:07.
 */
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunkMiddleware from "redux-thunk";
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
