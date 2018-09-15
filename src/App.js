import React, { Component } from "react";
import "./App.css";
import SearchContainer from "./searchcontainer/SearchContainer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchContainer />
      </React.Fragment>
    );
  }
}

export default App;
