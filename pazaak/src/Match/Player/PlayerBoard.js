import React from 'react';
import styles from './Board.module.css'
import Card from '../../Cards/Card';


const PlayerBoard = ( {board} ) => {
    return (
        <div className={styles.board}>
            {board.map((card) => {
                return <Card value={card.value} sign={card.sign} special={card.special} isHouse={card.isHouse}/> 
            })}
        </div>
    )
}

export default PlayerBoard;