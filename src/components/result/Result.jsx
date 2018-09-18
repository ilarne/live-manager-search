import React, { Component } from "react";
import "../../App.css";
import UserIcon from "../usericon/UserIcon";
import "./Result.css";

class Result extends Component {
  state = { selected: false, email: "" };

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
    let classes = "text ";
    classes += this.state.selected ? "active" : "";
    return classes;
  };

  async componentDidMount() {
    const email = await this.props.email;
    this.setState({ email: email });
  }

  render() {
    const { fullName, firstName, lastName } = this.props;
    return (
      <li
        data-cy="results-box"
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
            <span data-cy="results-name" className={this.getNameSpanClass()}>
              {fullName}
            </span>
            <div>
              <span className="text text-secondary">{this.state.email}</span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Result;
