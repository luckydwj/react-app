/**
 *  Created by daiwenjuan on 2020/4/17 09:03.
 */
import {createReducer} from '../../definitions/reducers'
import key from './key'
export  function page03 (state='',action) {
   return state
}
const initialState={}
const handlers={}

export default {
  [key.ID]:createReducer(initialState,handlers)
}