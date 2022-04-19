import React, { useState } from 'react';
import HouseCard from '../Cards/HouseCard';

const Board = ( {board} ) => {
    return (
        <div>
            {board.map((card) => {
                return <HouseCard value={card.value}/> 
            })}
        </div>
    )
}

export default Board;