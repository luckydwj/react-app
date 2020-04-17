import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {start} from './plugins'

const renderProviderView= (store,routes) => {
  return (
    <Provider store={store}>
      <Router>
        {routes.map(route=> <Route  {...route}/>)}
      </Router>
    </Provider>
  );
};

export default function () {
  const {store,routes}=start()
  return renderProviderView(store,routes)
}
