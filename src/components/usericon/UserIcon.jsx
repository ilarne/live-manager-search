import React, { Component } from "react";
import "./UserIcon.css";

class UserIcon extends Component {
  render() {
    const { firstName, lastName, selected } = this.props;
    return (
      <div className={this.getUserIconClass(selected)}>
        <span className="text-initials">
          {this.getInitials(firstName, lastName)}
        </span>
      </div>
    );
  }

  getInitials = (firstName, lastName) => {
    console.log(lastName);
    const firstNameInitial = firstName.charAt(0);
    const lastNameInitial = lastName.charAt(0);
    const fullInitials = firstNameInitial + lastNameInitial;
    return fullInitials;
  };

  getUserIconClass = selected => {
    let classes = "user-icon ";
    classes += selected ? "active" : "";
    return classes;
  };
}

export default UserIcon;
