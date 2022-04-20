import React, { useState } from 'react';
import PlayerHand from './PlayerHand';
import Board from './Board';
import styles from './Match.module.css'
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
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
      
      
    const generateHouseCard = () => { 
        let value = getRandomInt(1,11)
        const card = {
            value: value,
            sign: 1,
            special: true,
            isHouse: true
        }
        return card
    }
    
    const [hand, setHand] = useState(playerHand);
    const [count, setCount] = useState(0);
    const [board, setBoard] = useState([generateHouseCard()]);

    /* 
    do a check against the current count
    generate a house card and place on board
    call func to handle CPU turn 
    */
    const checkCount = () => {
        if (count > 20) {
            return false 
        } else if (count === 20) {
            return "win"
        }   
        return true
    }

    const handleEndTurn = () => {
        if (!checkCount()) { // if ending round with count over 20, player loses 
            // call func to end round and reset the board. increment round count for winner
            return 
        }
        const newCard = generateHouseCard()
        setBoard(board.concat(newCard))
        if (checkCount() === "win") { 
            // call func to end round, player wins
            window.alert('you win the round!')
            return 
        }
        // call func for CPU turn
    }

    const handleStand = () => {

    }

    const handlePlayCard = () => {

    }
    
    return (
        <div>
        <div className={styles.root}>
            <div className={styles.main}>
                <div className={styles.inner}>
                    <Board board={board} setBoard={setBoard}/>
                </div>
                <div className={styles.inner}>
                    <PlayerHand match={true} hand={hand} setHand={setHand} count={count} setCount={setCount}/>
                </div>
            </div>
            {/* <div>
                <Board board={board} setBoard={setBoard}/> 
            </div> */}
        </div>
            <div>
                <button onClick={() => handleEndTurn()}>End Turn</button>
                <button>Stand</button>
            </div>
        </div>
    )
}

export default Match;