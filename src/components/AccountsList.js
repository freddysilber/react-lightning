import React from 'react'
import Account from './Account'

const AccountsList = props => {
	console.log('account list props', props)
	const renderAccounts = () => props.accounts.map(account => <Account key={account.Id} account={account} />)

	return (
		<>
			{renderAccounts}
		</>
	)
}

export default AccountsList