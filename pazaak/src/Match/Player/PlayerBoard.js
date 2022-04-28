import React from 'react';
import styles from './Board.module.css'
import Card from '../../Cards/Card';


const PlayerBoard = ( {board} ) => {
    return (
        <div className={styles.board}>
            {board.map((card) => {
                return <Card card={card}/> 
            })}
        </div>
    )
}

export default PlayerBoard;