import React from 'react'

function Card({ letter, blueborder }) {
    return (
        <div className={blueborder ? 'card blue-box' : 'card'}>
            <h3>{letter.toUpperCase()}</h3>
        </div>
    )
}

export default Card
