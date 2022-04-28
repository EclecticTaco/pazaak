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
                        <div>
                            <Card card={card} handler={handler}/>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default PlayerHand;