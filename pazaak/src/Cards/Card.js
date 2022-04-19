import styles from './Card.module.css';

function Card({value, sign, house, special, handleAddToSideDeck }) {
    /*
    TODO: Refactor to one return statement
    move onClick into a surrounding div tag 
    */
    if (house) {
        return (
            <div className={styles.house} onClick={() => handleAddToSideDeck('+',value)}>
                + {value}
            </div>
        )
    }

    if (sign === "-") {
        return (
            <div className={styles.isNegative} onClick={() => handleAddToSideDeck('-',value)}>
                - {value}
            </div>
        )
    } else if (sign === '+'){
        return (
        <div className={styles.isPositive} onClick={() => handleAddToSideDeck('+',value)}>
            + {value}
        </div>
        )
    } else {
        return (
            <div className={styles.isSpecial} onClick={() => handleAddToSideDeck('+/-',value)}>
                +/- {value}
            </div>
            ) 
    }
}

export default Card;