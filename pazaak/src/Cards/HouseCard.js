import styles from './Card.module.css'
const HouseCard = ({value}) => {
    return (
        <div className={styles.house}>
            + {value}
        </div>
    )
}

export default HouseCard;