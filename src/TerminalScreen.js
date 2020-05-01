import React from 'react'
import './TerminalScreen.css'

const TerminalScreen = props => (
	<div className="terminal-window">
		<p>{props.text}</p>
	</div>
)

export default TerminalScreen