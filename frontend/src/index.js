import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
