import styles from './PlayerCard.module.css';

function Card({value, sign}) {
    if (!sign) {
        return (
            <div className={styles.isNegative}>
                - {value}
            </div>
        )
    } else {
        return (
        <div className={styles.isPositive}>
            + {value}
        </div>
        )
    }
}

export default Card;