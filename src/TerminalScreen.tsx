import * as React from 'react'
import './TerminalScreen.css'

const TerminalScreen = (props: any) => (
	<div className="terminal-window">
		<p>{props.text}</p>
	</div>
)

export default TerminalScreen