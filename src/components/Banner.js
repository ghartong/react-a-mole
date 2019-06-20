import React from 'react'

const banner = props => {
      return (
        <header id="game-banner">
            <h2>Level: <span className="banner-value" id="level-label">{props.level}</span></h2>
            <h1>Whack-a-mole</h1>
            <h2>Score: <span className="banner-value" id="score-label">{props.score}</span></h2>
        </header>
    )
}

export default banner
