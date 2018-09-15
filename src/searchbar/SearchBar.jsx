import React, { Component } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
