import React, { useState } from 'react';
import Card from '../Cards/Card'
import styles from './PlayerHand.module.css'

/* 
const cardToAdd = {
            sign: finalSign,
            val: val
        }
*/

const PlayerHand = ({hand, setHand, count, setCount, match}) => {
    return (
        <div className={styles.playerHand}>
            {
                hand.map((card) => {
                    return (
                        <div>
                            <Card match={true} sign={card.sign} value={card.value} special={card.special}/>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default PlayerHand;