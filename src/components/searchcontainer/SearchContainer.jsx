import React, { Component } from "react";
import SearchBar from "../searchbar/SearchBar";
import "./SearchContainer.css";

class SearchContainer extends Component {
  render() {
    return (
      <div className="search-container">
        <SearchBar />
      </div>
    );
  }
}

export default SearchContainer;
