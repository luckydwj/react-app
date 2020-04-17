/**
 *  Created by daiwenjuan on 2020/4/15 09:56.
 */
import { combineReducers } from "redux";
import { add } from "./home/index.reducer";
import {page01} from './page01/index.reducer'
import {page02} from './page02/index.reducer'
import {page03} from './page03/index.reducer'
import {page04} from './page04/index.reducer'


const rootReducer = combineReducers({ add ,page01,page02,page03});
export default rootReducer;
