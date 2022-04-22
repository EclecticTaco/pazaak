import styles from './Card.module.css';

function Card({match, value,handleAddToSideDeck, sign, special, isHouse, handlePlayCard, card, botCard}) {
    const signReference = {
        0: '-',
        1: '+',
        2: '+/-'
    }
    if (botCard) {
        return ( // replace handler to play card to bot's hand
            <div className={styles.botHand}>
        
            </div>
        )
    }
    if (special) {
        return (
            <div className={isHouse ? styles.isHouse : styles.isSpecial} onClick={!match && !isHouse ? () => { handleAddToSideDeck(sign, value, special) } : () => handlePlayCard(card)}> 
                {signReference[sign]} {value}
            </div>
        )
    }
    return (
        <div className={sign ? styles.isPositive : styles.isNegative} onClick={!match ? () => { handleAddToSideDeck(sign, value, special) } : () => handlePlayCard(card)}>
            {signReference[sign]} {value}
        </div>
    )

  
}

export default Card;