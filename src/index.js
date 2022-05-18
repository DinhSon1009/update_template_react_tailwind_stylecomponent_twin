import React from "react";
import ReactDOM from "react-dom";
import "./styles/global-style.css";
import App from "./App";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {},
  devTools: true,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
