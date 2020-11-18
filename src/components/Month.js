import React from "react";
import PropTypes from "prop-types";

function Month(props) {
  return (
    <React.Fragment>
      <h2>{props.month}</h2>
      <h3>Selection: {props.selection.map(element => {return <li>{element}</li>})}</h3>
      <hr />
    </React.Fragment>
  );
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string
};

export default Month;