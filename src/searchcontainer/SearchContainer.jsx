import React, { Component } from "react";
import SearchBar from "../searchbar/SearchBar";
import ResultsContainer from "../resultscontainer/ResultsContainer";
import "./SearchContainer.css";

class SearchContainer extends Component {
  state = {};
  render() {
    return (
      <div className="search-container">
        <SearchBar />
        <ResultsContainer />
      </div>
    );
  }
}

export default SearchContainer;
