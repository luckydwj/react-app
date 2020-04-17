/**
 *  Created by daiwenjuan on 2020/4/17 11:11.
 */
import { Home,Page01,Page02,Page03,Page04 } from "../plugins";

const routes = [
  {
    path: "/",
    exact:true,
    component: Home
  },
  {
    path: "/page01",
    component: Page01,
  },
  {
    path: "/page02",
    component: Page02,
  },{
    path: "/page03",
    component: Page03,
  },{
    path: "/page04",
    component: Page04,
  }
];

export default routes