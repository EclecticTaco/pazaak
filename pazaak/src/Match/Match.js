import React, { useState, useEffect } from 'react';
import PlayerHand from './Player/PlayerHand';
import PlayerBoard from './Player/PlayerBoard'
import BotBoard from './Bot/BotBoard';
import BotHand from './Bot/BotHand';
import styles from './Match.module.css'

const Match = ( {playerHand }) => { 
    const [hand, setHand] = useState(playerHand);
    const [count, setCount] = useState(0);
    const [board, setBoard] = useState([]);

    const [isPlayerActive, setisPlayerActive] = useState(true);
    const [isBotActive, setisBotActive] = useState(true);

    const [botHand, setBotHand] = useState([]);
    const [botCount, setbotCount] = useState(0);
    const [botBoard, setBotBoard] = useState([]);
    
    
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
        setBoard(board.concat([card]))
        setCount(count + card.value)
        return card
    }

    const generateBotHand = () => { 
        const temp = [];
        for (let i = 0; i < 4; i += 1) {
            const card = {
                sign: getRandomInt(0,3),
                value: getRandomInt(1,7),
                match: true
            }
            temp.push(card)
        }
        setBotHand(botHand.concat(temp))
    }

    const checkCount = () => {
        if (count > 20) {
            return false 
        } else if (count === 20) {
            return "win"
        }   
        return true
    }

    const handleEndTurn = () => {
        /* 
        if count is over 20 
            set player or bot in inactive 
            other player wins the round
        */

        generateHouseCard()
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
            player should not be able to click and play more cards to board
        */
    }
    /* 
    if isBotActive
        accept calls to handleBotTurn
    else
        return

    if isPlayerActive is false
        loop until victory or lost conditons are met

    read the current count
        if a card in hand can bring total up to 20
            play card
            set isBot active to false
        else 
            end turn
        if count is over 20
             if card can bring count under 20
                play card
                    stand if new count is 19 or 20
            else
                end turn
        

    */
    const handleBotTurn = () => {
        if (!isBotActive) return


        let repeat = 1;
        while (repeat < 1) {

            // if bot loses or wins a round, set botstop to true
            let botStop = false  
            if (!botStop) {
                // bot has either stood, end turn, or played a card
            } else {
                repeat -= 1;
            }
        }

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
        generateHouseCard();
        generateBotHand();
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
                        <PlayerHand hand={hand} handlePlayCard={handlePlayCard} />
                    </div>
                </div>

                <div className={styles.main}>
                    <div className={styles.inner}>
                        <BotBoard board={botBoard} />
                    </div>
                    <div className={styles.inner}>
                        <BotHand hand={botHand} handlePlayCard={handlePlayCard} />
                        {/*replace handler to only play cards to bot's board */}
                    </div>
                </div>

            </div>
            <div>
                <button onClick={() => handleEndTurn()}>End Turn</button>
                <button>Stand</button>
            </div>
        </div>
    )
}

export default Match;