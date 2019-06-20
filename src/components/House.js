import React from 'react'

const house = props => {
    return (
        <span className="mole-house">
            <button className={`mole-hole ${props.mole && 'mole'} `} id={`hole-${props.order}`} onClick={props.onAttack}>{props.mole && 'MOLE'}&nbsp;</button>
        </span>
    )
}

export default house
