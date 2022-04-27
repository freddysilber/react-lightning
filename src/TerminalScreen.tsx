import * as React from 'react'
import './TerminalScreen.css'

interface TerminalProps {
	text: string;
}

function TerminalScreen(props: TerminalProps) {
	return (
		<div className="terminal-window">
		<p>{props.text}</p>
	</div>
	)
}

export default TerminalScreen