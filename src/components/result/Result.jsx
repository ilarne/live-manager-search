import React, { Component } from "react";
import "../App.css";
import UserIcon from "../usericon/UserIcon";
import "./Result.css";

class Result extends Component {
  state = { selected: false };

  hoverOn = () => {
    this.setState({ selected: true });
  };

  hoverOff = () => {
    this.setState({ selected: false });
  };

  getResultContainerClass = () => {
    let classes = "result-container ";
    classes += this.state.selected ? "active" : "";
    return classes;
  };

  getNameSpanClass = () => {
    let classes = "text text-primary ";
    classes += this.state.selected ? "active" : "";
    return classes;
  };

  render() {
    return (
      <div
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
        className={this.getResultContainerClass()}
      >
        <div className="col-1">
          <UserIcon selected={this.state.selected} />
        </div>
        <div className="col-2">
          <div className="user-data-container">
            <span className={this.getNameSpanClass()}>Name</span>
          </div>
          <span className="text text-secondary">Email</span>
        </div>
      </div>
    );
  }
}

export default Result;
