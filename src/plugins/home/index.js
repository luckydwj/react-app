/**
 *  Created by daiwenjuan on 2020/4/16 10:00.
 */
import Home from "./components/HomeView";
import reducer from './index.reducer'
import key from './key'

export default [
  {
    id:key.ID,
    reducer:reducer,
  },
  {
    path:'/',
    exact:true,
    component:Home,
  }
]
