import React, { useState, useEffect } from 'react';
import PlayerHand from './PlayerHand';
import Board from './Board';
import styles from './Match.module.css'

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
        setBoard(board => board.concat([card]))
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

    const handleEndTurn = () => {
        let results = checkCount()
        if (!results) { // if ending round with count over 20, player loses 
            // call func to end round and reset the board. increment round count for winner
            window.alert('You have lost the round')
            return 
        }
        generateHouseCard()
        if (results === "win") { 
            // call stand function and wait for CPU to finish
            window.alert('you win the round!')
            return 
        }
        // call func for CPU turn
    }

    const handleStand = () => {

    }

    const handlePlayCard = (card) => {
        setBoard(board => board.concat([card])) // this is not firing or is being overridden 
        let handCopy = Array.from(hand);
        let idx = 0
        handCopy.forEach((handCard, i) => {
            if ((handCard.value && handCard.sign == card.value && card.sign)) {
                idx = i;
                return
            }
        })
        handCopy.splice(idx, 1)
        setHand(handCopy)

        if (card.sign > 0) {
            setCount(count + card.value)
        } else {
            setCount(count - card.value)
        }
        /* 
            player should be able to chose to stand after playing a card
            handleEndTurn is a placeholder for now
        */
        handleEndTurn();
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
                    <PlayerHand match={true} hand={hand} setHand={setHand} count={count} setCount={setCount} handlePlayCard={handlePlayCard}/>
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