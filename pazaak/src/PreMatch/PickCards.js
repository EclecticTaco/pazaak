import React, { useState } from 'react';
import Card from '../Cards/Card'
import styles from './PickCards.module.css'
import { v4 as uuidv4 } from 'uuid';

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
						const card = {
							key: uuidv4(),
							value:i + 1,
							sign: 0,
							style: 'isNegative',
							handler: handleAddToSideDeck
						}
						return <Card key={card.key} card={card} />
					})
				}
				{
					[...Array(6)].map((x, i) => {
						const card = {
							key: uuidv4(),
							value:i + 1,
							sign: 1,
							style: 'isPositive',
							handler: handleAddToSideDeck
						}
						return <Card key={card.key} card={card} />
					})
				}
				{
					[...Array(6)].map((x, i) => {
						const card = {
							key: uuidv4(),
							value:i + 1,
							sign: 2,
							special:1,
							style: 'isSpecial',
							handler: handleAddToSideDeck
						}
						return <Card key={card.key} card={card} />
					})
				}
			</div>
			<div className={styles.side}>
				{sideDeck.map((card, i) => {
					return <Card key={card.key}  card={card}/>
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