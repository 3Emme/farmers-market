import React from 'react';
import WeekList from './WeekList';

class DayControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        listVisibleOnPage: false
    };
  }

  render(){
    let currentVisibleState = null;
if (this.state.listVisibleOnPage) {
currentVisibleState = 
}
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }

}

export default DayControl;
