import React, { useState } from 'react';
import Card from '../Cards/Card';

const Board = ( {board} ) => {
    return (
        <div>
            {board.map((card) => {
                return <Card value={card.value} sign={card.sign} special={card.special} isHouse={card.isHouse}/> 
            })}
        </div>
    )
}

export default Board;