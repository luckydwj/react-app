/**
 *  Created by daiwenjuan on 2020/4/16 09:48.
 */
import key from "./key";
export function add(text) {
  return {
    type: key.ADD_TEXT,
    text
  };
}
