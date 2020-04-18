/**
 *  Created by daiwenjuan on 2020/4/18 19:06.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

export default (fn,actions)=>(Component)=>{
  const mapStateToProps = state => {
    if(!fn) return {}
    return {...fn(state)};
  };
  const mapDispatchToProps = dispatch => {
    if(!actions){
      return {}
    }
    return bindActionCreators(actions, dispatch)
  };
    return connect(
      mapStateToProps,
      mapDispatchToProps
  )(Component);
}

