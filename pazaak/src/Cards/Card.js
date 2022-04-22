import styles from './Card.module.css';

/* 
if not a match yet
    each card will have a event handler to add to sideDeck
        enclose with div tag? Place event handler in div tag?
        else move all event handlers to div tags 
if it is a match
    no event handlers

    const handleAddToSideDeck = (sign, val, special) => {

*/

function Card({match, value,handleAddToSideDeck, sign, special, isHouse, handlePlayCard, card}) {
    const signReference = {
        0: '-',
        1: '+',
        2: '+/-'
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