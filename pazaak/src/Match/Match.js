import React, { useState } from 'react';
import PlayerHand from './PlayerHand';
/* 
    player has three choices

    stand:
        set the final count to the current count
    play card:
        player can pick a card from current hand.
        add or subtract current count by picked card value
        update current count
    end turn
        generate house card
        add house card value to current count
        update current count
        
*/
const Match = ( {playerHand }) => {
    const [hand, setHand] = useState(playerHand)
    const [count, setCount] = useState(0)
    return (
        <PlayerHand hand={hand} setHand={setHand} count={count} setCount={setCount}/>
    )
}

export default Match;