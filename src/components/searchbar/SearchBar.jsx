import React, { Component } from "react";
import "../../App.css";
import ResultsContainer from "../resultscontainer/ResultsContainer";
import axios from "axios";

const BASE_API_URL = "http://localhost:3001/data";

class SearchBar extends Component {
  state = { results: [] };

  handleUserInput = event => {
    const value = event.target.value;
    this.updateResults(value);
  };

  updateResults = value => {
    this.filterManagers(value);
  };

  async filterManagers(query) {
    if (query.length >= 2) {
      const response = await axios.get(
        `${BASE_API_URL}?attributes.name_like=${query}`,
        null,
        {
          data: {},
          headers: { Accept: "application/vnd.api+json" }
        }
      );
      this.setState({ results: response.data });
    } else {
      this.setState({ results: [] });
    }
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <input
            data-cy="searchBar"
            className="text text-primary searchBar"
            type="text"
            autoFocus
            placeholder="Choose Manager"
            onInput={this.handleUserInput}
            onChange={this.handleUserInput}
          />
        </form>
        <ResultsContainer managers={this.state.results} />
      </React.Fragment>
    );
  }
}

export default SearchBar;
