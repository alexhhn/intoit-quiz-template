import React from "react";
import "./app.scss";
import { hot } from "react-hot-loader/root";
import HomeConnector from "../pages/Home/HomeConnector";

const App = () => {
  return <HomeConnector />;
};

export default hot(App);
