/**
 *  Created by daiwenjuan on 2020/4/18 19:06.
 */
import {connect} from 'react-redux'
import key from '../plugins/home/key'
import { add } from '../plugins/home/index.action'
import {bindActionCreators} from 'redux'

//function (mapStateToProps,mapDispatchToProps) {
//  return function (Component) {
//    return connect(
//      mapStateToProps,
//      mapDispatchToProps
//    )(Component);
//  }
//}
//const aa=(states)=>{
//  return {
//    aa:states['aa']
//  }
//}
export default (fn,actions)=>(Component)=>{
    return connect(
      state => fn(state),
      dispatch =>bindActionCreators(actions, dispatch)
  )(Component);
}

