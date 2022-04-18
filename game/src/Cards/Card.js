import styles from './Card.module.css';

function Card({value, sign, house, special}) {
    if (house) {
        return (
            <div className={styles.house}>
                + {value}
            </div>
        )
    }

    if (special) {
        return (
            <div className={styles.isSpecial}>
                {special.type} {value}
            </div>
        )
    }

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