import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./definitions/store";
import routes from './definitions/routes'
export default () => {
  return (
    <Provider store={store}>
      <Router>
        {routes.map(route=> <Route  {...route}/>)}
      </Router>
    </Provider>
  );
};
