import React, { Component } from "react";
import "./UserIcon.css";

class UserIcon extends Component {
  render() {
    const { firstName, lastName, selected } = this.props;
    return (
      <div data-cy="initials-box" className={this.getUserIconClass(selected)}>
        <div className="initials-container">
          <span data-cy="initials" className="text-initials">
            {this.getInitials(firstName, lastName)}
          </span>
        </div>
      </div>
    );
  }

  getInitials = (firstName, lastName) => {
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
