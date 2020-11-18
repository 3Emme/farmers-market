import React from 'react';
import { WeekList, FullWeekList } from './WeekList';


class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fullWeekListVisibleOnPage: true,
      currentVisibleDay: 0
    };
  }

  handleFullWeekListClick = () => {
    this.setState({ fullWeekListVisibleOnPage: true })
  }

  // sunday = () => {
  //   this.setState({ fullWeekListVisibleOnPage: false, currentVisibleDay: 0 })
  // }
  changeDay = (dayValue) => {
    this.setState({ fullWeekListVisibleOnPage: false, currentVisibleDay: dayValue })
  }

  render() {
    let currentVisibleState = null;
    if (this.state.fullWeekListVisibleOnPage){
      currentVisibleState = <FullWeekList
      currentIndex={this.state.currentVisibleDay} />;
    } else {
      currentVisibleState = <WeekList
      currentIndex={this.state.currentVisibleDay} />;
    }

    // currentVisibleState = <MonthList 
    // currentIndex={this.state.monthVisibleOnPage}/>
    return (
      <React.Fragment>
        <button onClick={this.handleFullWeekListClick}>Market Schedule</button>
        <button onClick={() => this.changeDay(0)}>Sunday</button>
        <button onClick={() => this.changeDay(1)}>Monday</button>
        <button onClick={() => this.changeDay(2)}>Tuesday</button>
        <button onClick={() => this.changeDay(3)}>Wednesday</button>
        <button onClick={() => this.changeDay(4)}>Thursday</button>
        <button onClick={() => this.changeDay(5)}>Friday</button>
        <button onClick={() => this.changeDay(6)}>Saturday</button>
        {currentVisibleState}
      </React.Fragment>
    );
  }
}

export default MarketControl;
