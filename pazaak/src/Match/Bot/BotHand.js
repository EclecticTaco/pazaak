import React, { useState } from 'react';
import Card from '../../Cards/Card'
import styles from './BotHand.module.css'

const BotHand = ({hand, handlePlayCard}) => { // replace handler to only play cards to bot's board
    return (
        <div className={styles.botHand}>
            {
                hand.map((card) => {
                    return (
                        <div>
                            <Card card={card}/>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default BotHand;