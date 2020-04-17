/**
 *  Created by daiwenjuan on 2020/4/16 09:08.
 */
import rootReduces from "../plugins/index.reducer";
export default rootReduces;

export function createReducer (initialState,handlers) {
  return function reducer(state=initialState,action) {
    if(handlers.hasOwnProperty(action.type)){
      return handlers[action.type](state,action)
    }else{
      return state
    }
  }
}