import React from 'react'
import Account from './Account'

export default class AccountsList extends React.Component {
	renderAccounts = () => this.props.accounts.map(account => <Account key={account.Id} account={account} />)

	render() {
		return (
			<>
				{this.renderAccounts()}
			</>
		)
	}
}