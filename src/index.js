import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/app";
import { Provider } from "react-redux";
import Store from "./Store";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
