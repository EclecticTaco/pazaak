import React, { useState } from 'react';
import PlayerHand from './PlayerHand';
import Board from './Board';
import HouseCard from '../Cards/HouseCard';
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
        
        board: array of card objs
        [
            {
                value: x
                sign: +
            }
        ]
*/
const Match = ( {playerHand }) => {
    function getRandomInt(max) { // moove all instances of this func to utils
        return Math.floor(Math.random() * max);
    }

    const generateHouseCard = () => { 
        const card = {
            value: getRandomInt(11),
            sign: '+'
        }
        return card;
    }
    const [hand, setHand] = useState(playerHand);
    const [count, setCount] = useState(0);
    const [board, setBoard] = useState([generateHouseCard()]);

    return (
        <div>
            <Board board={board} setBoard={setBoard}/>
            <PlayerHand hand={hand} setHand={setHand} count={count} setCount={setCount}/>
        </div>
    )
}

export default Match;