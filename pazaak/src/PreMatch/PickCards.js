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
		setHand(hand.concat(sideDeck))
	}

	const handleAddToSideDeck = (card) => {
		if (sideDeck.length === 10) {
			window.alert('You can only have 10 cards in your side deck')
			return
		}
		setSideDeck(sideDeck.concat(card))
	}

	const handleClearCards = () => {
		setSideDeck([])
	}


	return (
		<div className={styles.parent}>
			<div className={styles.main}>
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
				{sideDeck.map((card) => {
					return <Card key={card.key} card={card}/>
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