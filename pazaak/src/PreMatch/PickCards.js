import React, { useState } from 'react';
import Card from '../Cards/Card'
import styles from './PickCards.module.css'

const PickCards = ({ hand, setHand }) => {
	const [sideDeck, setSideDeck] = useState([]);
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	const handleSetHand = () => {
		/* 
		TODO: refactor all of this, need to store initial sideDeck without having to convert from arr to obj
		*/
		if (sideDeck.length !== 10) {
			window.alert('Please Choose 10 cards')
			return;
		}
		const cardsObject = {};
		for (let x = 0; x < sideDeck.length; x += 1) {
			cardsObject[x] = sideDeck[x]
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

	const handleAddToSideDeck = (sign, value, special) => {
		if (sideDeck.length === 10) {
			window.alert('You can only have 10 cards in your side deck')
			return
		}

		const cardToAdd = {
			sign: sign,
			value: value,
			special: special
		}
		setSideDeck(sideDeck.concat(cardToAdd))
	}
	const handleClearCards = () => {
		setSideDeck([])
	}


	return (
		<div className={styles.parent}>
			<div className={styles.main}>
				{/* render the main deck here */}
				{
					[...Array(6)].map((x, i) => {
						return <Card value={i + 1} sign={0} handleAddToSideDeck={handleAddToSideDeck} />
					})
				}
				{
					[...Array(6)].map((x, i) => {
						return <Card value={i + 1} sign={1} handleAddToSideDeck={handleAddToSideDeck}/>
					})
				}
				{
					[...Array(6)].map((x, i) => {
						return <Card value={i + 1} sign={3} special={1} handleAddToSideDeck={handleAddToSideDeck}/>
					})
				}
			</div>
			<div className={styles.side}>
				{sideDeck.map((card) => {
					return <Card value={card.value} sign={card.sign} special={card.special}/>
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