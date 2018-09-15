import React, { Component } from "react";
import SearchBar from "../searchbar/SearchBar";
import ResultsContainer from "../resultscontainer/ResultsContainer";

class SearchContainer extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <SearchBar />
        <ResultsContainer />
      </div>
    );
  }
}

export default SearchContainer;
