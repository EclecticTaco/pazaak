import React from 'react';
import PlayerCard from '../Cards/PlayerCard'

function PickCards() {
    return (
        <div className='main'>
            <PlayerCard value={1} sign={0}/>
            <PlayerCard value={9} sign={1}/>
        </div>
    )
}

export default PickCards;