/**
 *  Created by daiwenjuan on 2020/4/16 09:08.
 */
import { combineReducers } from "redux";
import app from './app'
export function createReducer (initialState,handlers) {
  return function reducer(state=initialState,action) {
    if(handlers.hasOwnProperty(action.type)){
      return handlers[action.type](state,action)
    }else{
      return state
    }
  }
}
export default function(){
  const reducers=app.getReducers()
  let r={}
  reducers.forEach(reducer=>{
    r={...r,...reducer}
  })
  return combineReducers(r);
}
