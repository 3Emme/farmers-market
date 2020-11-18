import React from "react";
import PropTypes from "prop-types";

function Day(props) {
  return (
    <React.Fragment>
      <h2>{props.day}</h2>
      <h3>Location: {props.location}</h3>
      <p><em>Hours Open: {props.hours}</em></p>
      <p><em> Booth: {props.booth}</em></p>
      <hr />
    </React.Fragment>
  );
}

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string

};

export default Day;