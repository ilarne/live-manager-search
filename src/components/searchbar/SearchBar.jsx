import React, { Component } from "react";
import "../../App.css";
import ResultsContainer from "../resultscontainer/ResultsContainer";
import axios from "axios";

const BASE_API_URL = "http://localhost:3001/data";

class SearchBar extends Component {
  state = { data: [], query: "" };

  async filterManagers() {
    const response = await axios.get(
      `${BASE_API_URL}?attributes.name_like=${this.state.query}`,
      null,
      {
        data: {},
        headers: { "Content-Type": "application/vnd.api+json" }
      }
    );
    this.setState({ data: response.data });
  }

  handleUserInput = event => {
    const value = event.target.value;
    this.setState({ query: value });
    this.updateResults(value);
  };

  updateResults = value => {
    if (this.state.query.length === 1) {
      this.setState({
        query: value,
        data: []
      });
    } else {
      this.filterManagers(this.state.query);
    }
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <input
            className="text text-primary searchBar"
            type="text"
            value={this.state.query}
            placeholder="Choose Manager"
            onChange={this.handleUserInput}
          />
        </form>
        <ResultsContainer managers={this.state.data} />
      </React.Fragment>
    );
  }
}

export default SearchBar;
