import React, { useState } from 'react';
import Card from '../../Cards/Card'
import styles from './BotHand.module.css'

const BotHand = ({hand, handlePlayCard}) => {
    return (
        <div className={styles.botHand}>
            {
                hand.map((card) => {
                    return (
                        <div>
                            <Card key={card.key} card={card}/>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default BotHand;