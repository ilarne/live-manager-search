import React, { Component } from "react";
import Result from "../result/Result";
import "./ResultsContainer.css";

class ResultsContainer extends Component {
  render() {
    return (
      <div className="results-container">
        <Result />
        <Result />
      </div>
    );
  }
}

export default ResultsContainer;
