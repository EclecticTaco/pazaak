import React, { useState } from 'react';
import PickCards from "./PreMatch/PickCards";
import Match from './Match/Match';

const App = () => {
  const [hand, setHand] = useState([])
  if (!hand.length) {
    return (
      <div className="App">
        <PickCards hand={hand} setHand={setHand}/>
      </div>
    )
  } else {
    return (
      <Match />
    )
  }
}

export default App;
