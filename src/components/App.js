import React from "react";
import Header from "./Header";
import MarketControl from "./MarketControl";
import SeasonControl from "./SeasonControl";

function App(){
  
  return (
    <React.Fragment>
      <Header />
      <MarketControl />
      <SeasonControl />
    </React.Fragment>
  );
}

export default App;