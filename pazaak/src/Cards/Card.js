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

function Card({match, value,handleAddToSideDeck, sign, special }) {
    const signReference = {
        0: '-',
        1: '+',
        3: '+/-'
    }
    const signStyleReference = {
        0: 'isNegative',
        1: 'isPositive',
        3: 'isSpecial'
    }
    if (special) {
        return (
            <div className={styles.isSpecial} onClick={!match ? () => { handleAddToSideDeck(sign, value, special) } : undefined}>
                {signReference[sign]} {value}
            </div>
        )
    }
    return (
        <div className={sign ? styles.isPositive : styles.isNegative} onClick={!match ? () => { handleAddToSideDeck(sign, value, special) } : undefined} >
            {signReference[sign]} {value}
        </div>
    )

  
}

export default Card;