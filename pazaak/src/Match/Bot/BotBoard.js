import React from 'react';
import styles from './BotBoard.module.css'
import Card from '../../Cards/Card';

const BotBoard = ( {board} ) => {
    return (
        <div className={styles.board}>
            {board.map((card) => {
                return <Card card={card}/> 
            })}
        </div>
    )
}

export default BotBoard;