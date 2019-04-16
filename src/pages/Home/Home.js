import React, { Component } from "react";
import Request from "../../services/RequestConfig";

export default class Home extends Component {
  componentWillMount = async () => {
    this.props.addTodo();
    // const res = await Request.get("subjects");
    // console.log("res", res);
  };

  render() {
    const { addTodo } = this.props;

    return <div>Heia</div>;
  }
}
