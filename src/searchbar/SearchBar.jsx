import React, { Component } from "react";
import "../App.css";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          className="text text-primary"
          type="text"
          placeholder="Choose Manager"
        />
      </div>
    );
  }
}

export default SearchBar;
