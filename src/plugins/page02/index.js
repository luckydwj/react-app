/**
 *  Created by daiwenjuan on 2020/4/17 09:05.
 */
import Page02 from './containers/Page02'
import key from './key'
import reducer from './index.reducer'
export default [
  {
    id:key.ID,
    reducer:reducer
  },{
    path:'/page02',
    exact:false,
    component:Page02,
  }
];