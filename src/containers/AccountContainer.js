import React from 'react'
import LCC from 'lightning-container'
import AccountsList from '../components/AccountsList'

export default class AccountContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			accounts: []
		}
	}

	componentDidMount() {
		LCC.callApex('AccountService.getAccounts', (result, event) => this.handleApexRequest(result, event)), { escape: true }
	}

	handleApexRequest = (result, event) => {
		console.log(result, event)
		if (event.statusCode >= 200 && event.statusCode < 300) {
			this.setState({
				accounts: result
			})
		} else {
			console.error('There was an error getting data from apex', event)
		}
	}

	render() {
		console.log('account container', this.state.accounts)
		return (
			<>
				<p>AccountContainer</p>
				<AccountsList accounts={this.state.accounts} />
			</>
		)
	}
}