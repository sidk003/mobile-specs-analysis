import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
=======

ReactDOM.render(<App />, document.getElementById("root"));
>>>>>>> 68478385d881e7e8668c28b4b99bf97d3d7f0ac6
