import * as React from 'react'
import Account from './Account'

export default function AccountsList(props: any) {
	return (
		<>
			{props.accounts.map((account: any) => {
				return <Account key={account.Id} account={account} />;
			})}
		</>
	)
}
