/**
 *  Created by daiwenjuan on 2020/4/17 09:05.
 */
import Page04 from './containers/Page04'
import key from './key'
import reducer from './index.reducer'


export default [
  {
    id:key.ID,
    reducer:reducer
  },{
    path:'/page04',
    exact:false,
    component:Page04,
  }
];
