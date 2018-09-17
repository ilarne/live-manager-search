import React, { Component } from "react";
import "../../App.css";
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
    const { fullName, firstName, lastName } = this.props;
    return (
      <li
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
        className={this.getResultContainerClass()}
      >
        <div className="col-1">
          <UserIcon
            selected={this.state.selected}
            lastName={lastName}
            firstName={firstName}
          />
        </div>
        <div className="col-2">
          <div className="user-data-container">
            <span className={this.getNameSpanClass()}>{fullName}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Result;
