import React from 'react'

const timer = props => {
      return (
        <h3 id="game-timer" className={props.class}>00:<span id="timer-seconds">{props.seconds}</span></h3>
    )
}

export default timer
