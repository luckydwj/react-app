/**
 *  Created by daiwenjuan on 2020/4/17 09:13.
 */
import React from 'react'
import {connect} from 'react-redux'
import Page04View from '../components/Page04View'
import { add } from '../../home/index.action'
const mapStateToProps = state => {
  return {
    state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(add("我是page02页面"))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Page04View)