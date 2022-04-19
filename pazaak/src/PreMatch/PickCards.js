import React, { useState } from 'react';
import Card from '../Cards/Card'
import styles from './PickCards.module.css'

const PickCards = ( {hand, setHand} ) => {
    const [sideDeck, setSideDeck] = useState([]);


    const handleSetHand = () => {
        /* 
        refactor all of this, need to store initial sideDeck without having to convert from arr to obj
        */
        const cardsObject = {};
        for (let x = 0; x < sideDeck.length; x += 1) {
            cardsObject[x] = sideDeck[x]
        }
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        const tempHand = []
        for (let i = 0; i < 4; i += 1) {
            const random = getRandomInt(10);
            if (cardsObject[random]) {
                tempHand.push(cardsObject[random]);
                cardsObject[random] = false;
            } else {
                i -= 1;
            }
        }
        setHand(hand.concat(tempHand))
    }

    const handleAddToSideDeck = (sign, val, special) => {
        const finalSign = (sign || special)
        const cardToAdd = {
            sign: finalSign,
            val: val
        }
        setSideDeck(sideDeck.concat(cardToAdd))
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