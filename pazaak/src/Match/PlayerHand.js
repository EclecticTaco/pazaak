import React, { useState } from 'react';
import Card from '../Cards/Card'
import styles from './PlayerHand.module.css'

/* 
const cardToAdd = {
            sign: finalSign,
            val: val
        }
*/

const PlayerHand = ({hand, handlePlayCard}) => {
    return (
        <div className={styles.playerHand}>
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

export default PlayerHand;