/**
 *  Created by daiwenjuan on 2020/4/17 09:13.
 */
import React from 'react'
import {connect} from 'react-redux'
import Page01View from '../components/Page01View'
import { add } from '../../home/index.action'
const mapStateToProps = state => {
  return {
    state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(add("我是page01页面"))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Page01View)