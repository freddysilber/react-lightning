import * as React from 'react'

export default class Counter extends React.Component {
	constructor() {
		super(null, null)
		this.state = {
			count: 0
		}
	}

	handleUpvote = () => {
		const count = (this.state as any).count + 1
		this.setState({
			count: count
		})
	}

	handleDownvote = () => {
		const count = (this.state as any).count - 1
		this.setState({
			count: count
		})
	}

	render() {
		return (
			<>
				<h1>Count: {(this.state as any).count}</h1>
				<button className="slds-button" onClick={this.handleUpvote}>+</button>
				<button className="slds-button" onClick={this.handleDownvote}>-</button>
			</>
		)
	}
}