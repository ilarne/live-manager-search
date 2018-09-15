import React, { Component } from "react";
import "./UserIcon.css";

class UserIcon extends Component {
  render() {
    return (
      <div className={this.getUserIconClass()}>
        <span className="text-initials">IL</span>
      </div>
    );
  }

  getUserIconClass = () => {
    let classes = "user-icon ";
    classes += this.props.selected ? "active" : "";
    return classes;
  };
}

export default UserIcon;
