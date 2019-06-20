import React from 'react'

const button = props => {
    const { label, id, hide } = props

    return (
        <button onClick={props.onButtonPressed} id={id} className={hide ? 'hide' : undefined}>{label}</button>
    )
}

export default button
