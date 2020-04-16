/**
 *  Created by daiwenjuan on 2020/4/15 09:56.
 */
import { combineReducers } from "redux";
import { add } from "./home/index.reducer";

const rootReducer = combineReducers({ add });
export default rootReducer;
