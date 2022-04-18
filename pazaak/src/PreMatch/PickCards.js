import React from 'react';
import Card from '../Cards/Card'
import styles from './PickCards.module.css'

function PickCards( {hand, setHand} ) {
    const handleSubmit = () => {
        setHand(hand.concat(1))
    }
    return (
        <div className={styles.main}>
            <Card value={1} sign={1} />
            <Card value={2} sign={1} />
            <Card value={3} sign={1} />
            <Card value={4} sign={1} />
            <Card value={5} sign={1} />
            <Card value={6} sign={1} />

            <Card value={1} sign={0} />
            <Card value={2} sign={0} />
            <Card value={3} sign={0} />
            <Card value={4} sign={0} />
            <Card value={5} sign={0} />
            <Card value={6} sign={0} />

            <Card value={1} special={{type:'+/-'}}/>
            <Card value={2} special={{type:'+/-'}}/>
            <Card value={3} special={{type:'+/-'}}/>
            <Card value={4} special={{type:'+/-'}}/>
            <Card value={5} special={{type:'+/-'}}/>
            <Card value={6} special={{type:'+/-'}}/>

            <button onClick={handleSubmit}>

            </button>
        </div>
    )
}

export default PickCards;

/* 
hand = 
[ 
    {
        sign: '-',
        val: 2
    },
    {
        sign: '+',
        val: 3
    }

]
*/