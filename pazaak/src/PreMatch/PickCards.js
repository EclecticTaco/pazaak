import React from 'react';
import PlayerCard from '../Cards/Card'
import styles from './PickCards.module.css'

function PickCards() {
    return (
        <div className={styles.main}>
            <PlayerCard value={1} sign={0}/>
            <PlayerCard value={9} sign={1}/>
            <PlayerCard value={1} sign={0}/>
            <PlayerCard value={9} sign={1}/>
            <PlayerCard value={1} sign={0}/>
            <PlayerCard value={9} sign={1}/>
            <PlayerCard value={1} sign={0}/>
            <PlayerCard value={9} sign={1}/>
            <PlayerCard value={1} sign={0}/>
            <PlayerCard value={9} sign={1}/>
        </div>
    )
}

export default PickCards;