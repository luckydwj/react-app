/**
 *  Created by daiwenjuan on 2020/4/17 09:05.
 */
import Page01 from './containers/Page01'
import key from './key'
import reducer from './index.reducer'
export default [
  {
    id:key.ID,
    reducer:reducer
  },
  {
    path:'/page01',
    exact:false,
    component:Page01
  }
];
