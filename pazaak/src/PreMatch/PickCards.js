import React, { useState } from 'react';
import Card from '../Cards/Card'
import styles from './PickCards.module.css'

const PickCards = ( {hand, setHand} ) => {
    const [sideDeck, setSideDeck] = useState([]);


    const handleSetHand = () => {
        /* 
        refactor all of this, need to store initial sideDeck without having to convert from arr to obj
        */
       if (sideDeck.length !== 10) {
		   window.alert('Please Choose 10 cards')
		   return;
       }
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
    const handleClearCards = () => {
		setSideDeck([])
	}

    return (
		<div className={styles.parent}>
			<div className={styles.main}>
				<Card value={1} sign={'+'} handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={2} sign={'+'} handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={3} sign={'+'} handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={4} sign={'+'} handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={5} sign={'+'} handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={6} sign={'+'} handleAddToSideDeck={handleAddToSideDeck} />

				<Card value={1} sign={'-'} handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={2} sign={'-'} handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={3} sign={'-'} handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={4} sign={'-'} handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={5} sign={'-'} handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={6} sign={'-'} handleAddToSideDeck={handleAddToSideDeck} />

				<Card value={1} sign={'+/-'} handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={2} sign={'+/-'}  handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={3} sign={'+/-'}  handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={4} sign={'+/-'}  handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={5} sign={'+/-'}  handleAddToSideDeck={handleAddToSideDeck} />
				<Card value={6} sign={'+/-'}  handleAddToSideDeck={handleAddToSideDeck} />
			</div>
			<div className={styles.side}>
				{sideDeck.map((card) => {
					return <Card value={card.val} sign={card.sign} handleAddToSideDeck={handleAddToSideDeck} />
				})}
			</div>
			<div className={styles.parent}>
				<button onClick={handleSetHand} className={styles.button}>
					Play
				</button>
				<button onClick={handleClearCards} className={styles.button}>
					Clear Cards
				</button>
			</div>
		</div>

    )
}

export default PickCards;