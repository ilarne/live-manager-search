import React, { Component } from "react";
import Result from "../result/Result";
import "./ResultsContainer.css";
import axios from "axios";

const BASE_API_URL = "http://localhost:3001/";

class ResultsContainer extends Component {
  async getEmail(manager) {
    const emailId = manager.relationships.account.data.id;
    if (emailId) {
      const response = await axios.get(
        `${BASE_API_URL}included/${emailId}`,
        null,
        {
          data: {},
          headers: { Accept: "application/vnd.api+json" }
        }
      );
      const email = response.data.attributes.email;
      return email;
    }
  }

  render() {
    const { managers } = this.props;
    return (
      <React.Fragment>
        <ul className="results-container">
          {managers.map(manager => (
            <Result
              key={manager.id}
              fullName={manager.attributes.name}
              firstName={manager.attributes.firstName}
              lastName={manager.attributes.lastName}
              email={this.getEmail(manager)}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default ResultsContainer;
