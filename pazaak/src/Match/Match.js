import React, { useState, useEffect } from 'react';
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
    const [hand, setHand] = useState(playerHand);
    const [count, setCount] = useState(0);
    const [board, setBoard] = useState([]);
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
      }
      
    const generateHouseCard = () => { 
        const value = getRandomInt(1,11)
        const card = {
            value: value,
            sign: 1,
            special: true,
            isHouse: true
        }
        setBoard(board.concat(card))
        setCount(count + card.value)
        return card
    }

    const checkCount = () => {
        if (count > 20) {
            return false 
        } else if (count === 20) {
            return "win"
        }   
        return true
    }

    useEffect(() => {
        generateHouseCard()
    }, [])

    const handleRemoveCardFromHand = (card) => {

    }

    const handleEndTurn = () => {
        if (!checkCount()) { // if ending round with count over 20, player loses 
            // call func to end round and reset the board. increment round count for winner
            return 
        }
        generateHouseCard()
        if (checkCount() === "win") { 
            // call stand function and wait for CPU to finish
            window.alert('you win the round!')
            return 
        }
        // call func for CPU turn
    }

    const handleStand = () => {

    }
    /* 
    player choses a card
        card is removed from hand
        increment or decrement count by card value
    check count
        if 20. Player stands
    */
    const handlePlayCard = () => {

    }
    
    return (
        <div>
        <div> {count}</div>
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