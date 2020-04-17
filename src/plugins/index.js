/**
 *  Created by daiwenjuan on 2020/4/15 09:56.
 */
import app from '../definitions/app'
import initRoutes from '../definitions/routes'
import initStore from '../definitions/store'
function initApp () {
  app.mount(require('./home').default)
   .mount(require('./page01').default)
   .mount(require('./page02').default)
   .mount(require('./page03').default)
  .mount(require('./page04').default)
}
const start =() =>{
    initApp()
   const routes=initRoutes()
   const store=initStore()
  return {routes,store}
}
export {start}

