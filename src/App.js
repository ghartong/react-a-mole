import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Banner from './components/Banner'
import Timer from './components/Timer'
import Notice from './components/Notice'
import MoleHouse from './components/House'
import GameButton from './components/Button'

import { onStart, onPause, onReset, onHit, onMiss } from './actions/index'

class App extends Component {
	componentDidMount() {
//		this.props.defaultFunction()
	}

	onPauseHandler = () => {
		this.props.onPause()
	}

	onStartHandler = () => {
		this.props.onStart()
	}

	onResetHandler = () => {
		this.props.onReset()
	}

	onAttackHandler = (e) => {
		const isMole = e.target.className.indexOf('mole ')
		if(isMole > 0) {
			this.props.onHit()
		} else {
			this.props.onMiss()
		}
	}

	render() {
		const numberOfHoles = 8

		let digHoles = () => {
			let holes = []
			const moleHole = this.props.moleHole

			for (let h = 1; h <= numberOfHoles; h++) {
				holes.push(<MoleHouse key={h} order={h} onAttack={this.onAttackHandler} mole={h === moleHole ? true : false} />)
			}

			return holes
		}

		return (
			<div id="cabinet" className="App">
				<Banner level={this.props.level} score={this.props.score} />
				<Timer seconds={this.props.gameTime} class={this.props.timerClass} />
				<div id="game-screen">
					<Notice type={this.props.notice} summary={this.props.summary} />
					{digHoles()}
				</div>
				<footer id="game-footer">
					<GameButton onButtonPressed={this.onPauseHandler} label="Pause" id="btn-pause" hide={this.props.hidePauseBtn} />
					<GameButton onButtonPressed={this.onStartHandler} label="Start" id="btn-start" hide={this.props.hideStartBtn} />
					<GameButton onButtonPressed={this.onResetHandler} label="Reset" id="btn-reset" hide={this.props.hideResetBtn} />
				</footer>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		hidePauseBtn: state.buttons.hidePauseBtn,
		hideStartBtn: state.buttons.hideStartBtn,
		hideResetBtn: state.buttons.hideResetBtn,
		notice: state.notices.type,
		summary: state.notices.message,
		gameTime: state.clock.gameTime,
		timerClass: state.stats.timerAlert ? 'red' : '',
		level: state.stats.level,
		score: state.stats.score,
		moleHole: state.moles.moleInHole
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onStart: () => dispatch(onStart()),
		onPause: () => dispatch(onPause()),
		onReset: () => dispatch(onReset()),
		onHit: () => dispatch(onHit()),
		onMiss: () => dispatch(onMiss())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
