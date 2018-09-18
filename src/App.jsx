import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/searchbar/SearchBar";
import "./components/searchbar/SearchBar.css";

class App extends Component {
  render() {
    return (
      <div className="search-container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
