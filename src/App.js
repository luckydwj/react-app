import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./definitions/store";
import { Home,Page01,Page02,Page03,Page04 } from "./plugins";

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/page01" component={Page01}/>
        <Route path="/page02" component={Page02}/>
        <Route path="/page03" component={Page03}/>
        <Route path="/page04" component={Page04}/>
      </Router>
    </Provider>
  );
};
