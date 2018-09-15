import React, { Component } from "react";
import Result from "../result/Result";

class ResultsContainer extends Component {
  render() {
    return (
      <div>
        <Result />
        <Result />
      </div>
    );
  }
}

export default ResultsContainer;
