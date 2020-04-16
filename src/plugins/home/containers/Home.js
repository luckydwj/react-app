/**
 *  Created by daiwenjuan on 2020/4/16 09:50.
 */
import React from "react";
import { connect } from "react-redux";
import HomeView from "../components/HomeView";
import { add } from "../index.action";

const mapStateToProps = state => {
  return {
    state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(add("我被点击拉"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
