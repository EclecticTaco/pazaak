function Card({key, card}) {
    const signReference = {
        0: '-',
        1: '+',
        2: '+/-'
    }

    const styles = {
        isNegative: {
            backgroundColor:'crimson',
            boxSizing: 'border-box',
            width: '150px',
            height: '150px',
            border: 'solid black 5px',
            padding: '5px'
        },
        isPositive: {
            backgroundColor:'blue',
            boxSizing: 'border-box',
            width: '150px',
            height: '150px',
            border: 'solid black 5px',
            padding: '5px'
        },
        isHouse: {
            backgroundColor:'green',
            boxSizing: 'border-box',
            width: '150px',
            height: '150px',
            border: 'solid black 5px',
            padding: '5px'
        },
        isSpecial: {
            backgroundColor:'gold',
            boxSizing: 'border-box',
            width: '150px',
            height: '150px',
            border: 'solid black 5px',
            padding: '5px'
        },
        isBotHand: {
            backgroundColor:'grey',
            boxSizing: 'border-box',
            width: '150px',
            height: '150px',
            border: 'solid black 5px',
            padding: '5px'
        },
    }
    
    return ( // pass card object into handler, refactor all handlers to expect card obj
        <div style={styles[card.style]} onClick={() => {card.handler(card)}}>
            {signReference[card.sign]} {card.value}
        </div>
    )
  
}

export default Card;