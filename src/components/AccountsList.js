import React from 'react'
import Account from './Account'

const AccountsList = () => {
	renderAccounts = () => this.props.accounts.map(account => <Account key={account.Id} account={account} />)

	return (
		<>
			{this.renderAccounts()}
		</>
	)
}

export default AccountsList