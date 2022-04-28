import React, { useState } from 'react';
import Card from '../../Cards/Card';
import styles from './PlayerHand.module.css'

/* 
const cardToAdd = {
            sign: finalSign,
            val: val
        }
*/

const PlayerHand = ({hand, handler}) => {
    return (
        <div className={styles.playerHand}>
            {
                hand.map((card) => {
                    return (
                        <Card key={card.key} card={card} handler={handler}/>
                    )
                })
            }
        </div>
    )
}

export default PlayerHand;