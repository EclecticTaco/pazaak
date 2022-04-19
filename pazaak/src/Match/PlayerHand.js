import React, { useState } from 'react';
import Card from '../Cards/Card'
import styles from './PlayerHand.module.css'

/* 
const cardToAdd = {
            sign: finalSign,
            val: val
        }
*/

const PlayerHand = ({hand, setHand, count, setCount}) => {
    return (
        <div className={styles.playerHand}>
            {
                hand.map((card) => {
                    return (
                        <div>
                            <Card sign={card.sign} value={card.val} />
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default PlayerHand;