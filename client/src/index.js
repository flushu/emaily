import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import "materialize-css/dist/css/materialize.min.css"; // need to add file extension unless javascript. also w/ relative path, webpack understands it as we are trying to access npm modules
// We are going to use Materialize CSS. Has option to use Materialize-UI which is a library for react framework to add Pre-built Materialized Components. Materialize CSS is easy to customize than Materialize-UI because M-UI was made with Javascript and harder to customize. Materialize CSS is made with pure CSS and few Javascript codes; therefore, easier to customize.
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log("STRIPE_KEY is ", process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is ", process.env.NODE_ENV);
