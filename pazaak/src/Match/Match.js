import React, { useState, useEffect } from 'react';
import PlayerHand from './Player/PlayerHand';
import PlayerBoard from './Player/PlayerBoard'
import BotBoard from './Bot/BotBoard';
import BotHand from './Bot/BotHand';
import styles from './Match.module.css'
import { v4 as uuidv4 } from 'uuid';


const Match = ( {playerHand }) => { 
    const [hand, setHand] = useState(playerHand);
    const [count, setCount] = useState(0);
    const [board, setBoard] = useState([]);

    const [isPlayerActive, setisPlayerActive] = useState(true);
    const [isBotActive, setisBotActive] = useState(true);

    const [botHand, setBotHand] = useState([]);
    const [botCount, setBotCount] = useState(0);
    const [botBoard, setBotBoard] = useState([]);
    
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
      }
      
    const generateHouseCard = (player) => { 
        const value = getRandomInt(1,11)
        const card = {
            value: value,
            sign: 1,
            special: true,
            style: 'isHouse',
            key: uuidv4()
        }
        if (player) {
            setBoard(board.concat(card))
            setCount(count + card.value)
            return
        } else {
            return card
        }
    }

    const generateBotHand = () => { 
        const temp = [];
        for (let i = 0; i < 4; i += 1) {
            const card = {
                sign: getRandomInt(0,3),
                value: getRandomInt(1,7),
                match: true,
                key:uuidv4(),
                style:'isBotHand'
            }
            temp.push(card)
        }
        setBotHand(botHand.concat(temp))
    }

    const handleEndTurn = () => {
        generateHouseCard(true)
        setTimeout(handleBotTurn, 1000)
    }

    const handleStand = () => {
        setisPlayerActive((prev) => !prev, handleBotTurn(false))
    }

    const handlePlayCard = (card) => {
        setBoard(board => board.concat([card])) 
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
    }

    const handleBotTurn = () => {
        const botHandCopy = Array.from(botHand);
        const botCountCopy = botCount;
        const botBoardCopy = Array.from(botBoard);
        let isBotTurn = true;

        if (!isBotActive) {
            return
        };

        const botTurn = ({hand,count,board}) => {
            if (count > 20 || !isBotTurn) {
                isBotTurn = false;
                return
            };
            const newCard = generateHouseCard(false); 
            count += newCard.value;
            board.push(newCard)

            if (count == 19 || count == 20) {
                setisBotActive(prev => !prev);
                setBotCount(botCount => count)
                setBotBoard(botBoard.concat(newCard))
                isBotTurn = false;
                return
            }

            if (!isBotTurn) return
            let idx = 0;

            hand.forEach((card, i) => {
                if ( ( ((card.value + count) === (19 || 20) ) && card.sign === 1 ) || ( ((count - card.value) === (19 || 20) ) && card.sign === 0 ) ) {
                    if (card.sign === 1) {
                        card.style = 'isPositive'
                    } else {
                        card.style = 'isNegative'
                    }
                    idx = i;
                    if (card.sign == 1) {
                        count += card.value
                    } else {
                        count -= card.value;
                    }
                    isBotTurn = false;
                    setisBotActive(prev => !prev);
                    board.push(card);
                    hand.splice(idx,1);
                    return
                }
            })
            const newState = {
                hand: hand,
                count: count,
                board: board
            }
            if (!isBotActive) return;

            setBotHand((botHand) => newState.hand);
            setBotBoard((botBoard) => newState.board);
            setBotCount(botCount => count)
            if (!isPlayerActive && isBotTurn) {
                setTimeout(() => {
                    botTurn(newState)
                }, 2000)
            } 
        }

        botTurn({
            hand: botHandCopy,
            count: botCountCopy,
            board: botBoardCopy
        })
        
    }

    const handleCompareCounts = () => {
        /* 
        if player is active and count is over 20 on a stand or end turn
            player loses round
            increment rounds won on bot
        if bot is active and count is over 20 on a stand or end turn
            bot loses round
            increment rounds won on player 
        
        if both bot and player is not active
            increment rounds won on bot or player with the count closes to 20
            if tie
                replay round
        */

        if (count === 20) {
            return 'Player has won'
        }
        if (botCount === 20) {
            return 'Bot has won'
        }
        // call this when both players either stand, end on a 20, or bust.
    }   

    useEffect(() => {
        generateHouseCard(true);
        const botHouseCard = generateHouseCard(false);
        generateBotHand();
        setBotBoard(botBoard.concat(botHouseCard))
        setBotCount(botCount + botHouseCard.value)
    }, [])

    useEffect(() => {
        const results = handleCompareCounts();
        if (results) window.alert(results)
    })  

    return (
        <div>
            <div> {count}</div>
            <div className={styles.root}>

                <div className={styles.main}>
                    <div className={styles.inner}>
                        <PlayerBoard board={board} />
                    </div>
                    <div className={styles.inner}>
                        <PlayerHand hand={hand} handler={handlePlayCard} />
                    </div>
                </div>

                <div className={styles.main}>
                    <div className={styles.inner}>
                        <BotBoard board={botBoard} />
                    </div>
                    <div className={styles.inner}>
                        <BotHand hand={botHand} handler={handlePlayCard} />
                        <div>Bot Count is {botCount}</div>
                    </div>
                </div>

            </div>
            <div>
                <button onClick={() => handleEndTurn()}>End Turn</button>
                <button onClick={() => handleStand()}>Stand</button>
            </div>
        </div>
    )
}

export default Match;