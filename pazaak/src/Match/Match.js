import React, { useState } from 'react';
import PlayerHand from './PlayerHand';
import Board from './Board';
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
    const [hand, setHand] = useState(playerHand);
    const [count, setCount] = useState(0);
    const [board, setBoard] = useState([]);
    return (
        <div>
            <Board board={board} setBoard={setBoard}/>
            <PlayerHand hand={hand} setHand={setHand} count={count} setCount={setCount}/>
        </div>
    )
}

export default Match;