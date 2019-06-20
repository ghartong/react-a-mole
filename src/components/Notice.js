import React from 'react'

const notice = props => {
      return (
        <div id="game-notice" className={props.type}>
          <h2>&nbsp;</h2>
          <p id="game-summary" className={!props.summary && 'hide'}>{props.summary}&nbsp;</p>
        </div>
    )
}

export default notice
