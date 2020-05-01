import React from 'react'

export default class Counter extends React.Component {
	constructor() {
		super()
		this.state = {
			count: 0
		}
	}

	handleClick = () => {
		const count = this.state.count + 1
		this.setState({
			count: count
		})
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button className="slds-button" onClick={this.handleClick}>+</button>
			</div>
		)
	}
}