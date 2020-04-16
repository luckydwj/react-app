/**
 *  Created by daiwenjuan on 2020/4/16 09:48.
 */
import key from "./key";
export function add(state = "", action) {
  if (action.type === key.ADD_TEXT) {
    return { ...state, text: action.text };
  }
  return state;
}
