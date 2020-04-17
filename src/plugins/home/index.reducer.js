/**
 *  Created by daiwenjuan on 2020/4/16 09:48.
 */
import key from "./key";
import {createReducer} from '../../definitions/reducers'
const initialState={
  text:'initialState'
}
const handlers= {
   [key.ADD_TEXT]:add
}

function add(state, action) {
  return  { ...state, text: action.text };
}

export default {
  [key.ID]:createReducer(initialState,handlers)
}