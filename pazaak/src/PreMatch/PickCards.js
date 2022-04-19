import React, { useState } from 'react';
import Card from '../Cards/Card'
import styles from './PickCards.module.css'

const PickCards = ( {hand, setHand} ) => {
    const [sideDeck, setSideDeck] = useState([])


    const handleSetHand = () => {
        setHand(hand.concat(sideDeck))
    }

    const handleAddToSideDeck = (sign, val, special) => {
        const finalSign = (sign || special)
        setSideDeck(sideDeck.concat({
            sign: finalSign,
            val:val
        }))
    }
    
    return (
        <div className={styles.main}>
            <Card value={1} sign={1} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={2} sign={1} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={3} sign={1} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={4} sign={1} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={5} sign={1} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={6} sign={1} handleAddToSideDeck={handleAddToSideDeck} />

            <Card value={1} sign={0} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={2} sign={0} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={3} sign={0} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={4} sign={0} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={5} sign={0} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={6} sign={0} handleAddToSideDeck={handleAddToSideDeck} />

            <Card value={1} special={{type:'+/-'}} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={2} special={{type:'+/-'}} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={3} special={{type:'+/-'}} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={4} special={{type:'+/-'}} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={5} special={{type:'+/-'}} handleAddToSideDeck={handleAddToSideDeck} />
            <Card value={6} special={{type:'+/-'}} handleAddToSideDeck={handleAddToSideDeck} />

            <button onClick={handleSetHand}>

            </button>
        </div>
    )
}

export default PickCards;