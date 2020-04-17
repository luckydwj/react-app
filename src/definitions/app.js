/**
 *  Created by daiwenjuan on 2020/4/17 17:54.
 */
class Plugins {
 static  _instance=null
  constructor () {
    this.plugins=[]
  }
  static getInstance() {
    if (this._instance == null) {
      this._instance = new Plugins()
    }
    return this._instance
  }
  mount(plugin){
    this.plugins=this.plugins.concat(plugin)
    return this
  }
  getReducers(){
   return this.plugins.map(p=>{
     if(p.id && p.reducer){
       return p.reducer
     }
   })
  }
  getRoutes(){
   return this.plugins.filter(p=>p.path)
  }
}
const app=Plugins.getInstance()

export default app