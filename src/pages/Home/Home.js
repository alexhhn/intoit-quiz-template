import React, { Component } from "react";
import Request from "../../services/RequestConfig";

export default class Home extends Component {
  componentWillMount = async () => {
    await this.props.fetchSubjects();
    // const res = await Request.get("subjects");
  };

  render() {
    return <div>Heia</div>;
  }
}
