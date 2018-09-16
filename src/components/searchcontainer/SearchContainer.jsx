import React, { Component } from "react";
import SearchBar from "../searchbar/SearchBar";
import "./SearchContainer.css";
import axios from "axios";

const BASE_API_URL = "http://localhost:3001/db";

class SearchContainer extends Component {
  state = { data: [], query: "" };

  async componentDidMount() {
    const response = await axios.get(BASE_API_URL, null, {
      data: {},
      headers: { "Content-Type": "application/vnd.api+json" }
    });
    this.setState({ data: response.data });
  }

  handleInput = query => {
    this.setState({
      query
    });
  };

  render() {
    return (
      <div className="search-container">
        <SearchBar />
      </div>
    );
  }
}

export default SearchContainer;
