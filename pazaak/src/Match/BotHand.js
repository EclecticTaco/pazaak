import React, { useState } from 'react';
import Card from '../Cards/Card'
import styles from './PlayerHand.module.css'

const BotHand = ({hand, handlePlayCard}) => {
    return (
        <div className={styles.PlayerHand}>
            {
                hand.map((card) => {
                    return (
                        <div>
                            <Card match={true} sign={card.sign} value={card.value} special={card.special} handlePlayCard={handlePlayCard} card={card}/>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default BotHand;