import React from 'react';
import { SeasonList } from './SeasonList';


class SeasonControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      seasonsVisibleOnPage: false,
      currentVisibleSeason: 0
    };
  }

  changeSeason = (seasonValue) => {
    this.setState({ seasonsVisibleOnPage: true, currentVisibleSeason: seasonValue })
  }

  render() {
    let currentVisibleState = null;
    if (this.state.seasonsVisibleOnPage){
      currentVisibleState = <SeasonList
      currentIndex={this.state.currentVisibleSeason} />;
    } else {
      currentVisibleState = null;
    }

    return (
      <React.Fragment>
        <button onClick={() => this.changeSeason(0)}>Winter</button>
        <button onClick={() => this.changeSeason(1)}>Spring</button>
        <button onClick={() => this.changeSeason(2)}>Summer</button>
        <button onClick={() => this.changeSeason(3)}>Fall</button>
        {currentVisibleState}
      </React.Fragment>
    );
  }
}

export default SeasonControl;