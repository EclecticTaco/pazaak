import React, { useState } from 'react';
import PickCards from "./PreMatch/PickCards";

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
      <div> Place Holder</div>
    )
  }
}

export default App;
