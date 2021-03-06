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
    this.plugins= [...this.plugins,...plugin]
    return this
  }

  getReducers(){
    return this.plugins.filter(p=>p.id && p.reducer).map(line=>line.reducer)
  }
  getRoutes(){
   return this.plugins.filter(p=>p.path)
  }
}
const app=Plugins.getInstance()

export default app