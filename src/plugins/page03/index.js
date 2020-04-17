/**
 *  Created by daiwenjuan on 2020/4/17 09:05.
 */
import Page03 from './containers/Page03'
import reducer from './index.reducer'
import key from './key'

export default [
  {
    id:key.ID,
    reducer:reducer
  },{
    path:'/page03',
    exact:false,
    component:Page03,
  }
];