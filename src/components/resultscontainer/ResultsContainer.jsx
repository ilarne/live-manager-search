import React from "react";
import Result from "../result/Result";
import "./ResultsContainer.css";

function ResultsContainer(props) {
  const { managers } = props;

  return (
    <React.Fragment>
      <ul className="results-container">
        {managers.map(manager => (
          <Result
            key={manager.id}
            fullName={manager.attributes.name}
            firstName={manager.attributes.firstName}
            lastName={manager.attributes.lastName}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ResultsContainer;
