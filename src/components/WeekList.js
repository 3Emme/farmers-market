import React from "react";
import Day from "./Day";
import PropTypes from "prop-types";

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Friday",
    location: "Belmont",
    hours: "10:00pm - 1:30am",
    booth: "3E"
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

function WeekList(props) {
  return (
    <React.Fragment>
      <hr />
      {/* {props.currentVisibleDay} */}
      <Day day={marketSchedule[props.currentIndex].day}
        location={marketSchedule[props.currentIndex].location}
        hours={marketSchedule[props.currentIndex].hours}
        booth={marketSchedule[props.currentIndex].booth}
      />

    </React.Fragment>
  );
}

marketSchedule.propTypes = {
  currentIndex: PropTypes.number
}

function FullWeekList() {
  return (
    <React.Fragment>
      <hr />
      {marketSchedule.map((day, index) =>
        <Day day={day.day}
          location={day.location}
          hours={day.hours}
          booth={day.booth}
          key={index} />
      )}
    </React.Fragment>
  );
}

export { WeekList, FullWeekList };

// function MonthList(props) {   
//   return (
//      <React.Fragment>
//         <hr />        
//         <Month 
//            month={availableProduce[props.currentIndex].month}
//            selection={availableProduce[props.currentIndex].selection}
//            />         
//      </React.Fragment>
//   );
// }

// MonthList.propTypes = {
//   currentIndex: PropTypes.number   
// }