import React, { Component } from "react";
import Request from "../../services/RequestConfig";

export default class Home extends Component {
  componentWillMount = async () => {
    const res = await Request.get("subjects");
    console.log("res", res);
  };

  render() {
    return <div>Heia</div>;
  }
}
