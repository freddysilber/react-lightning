import React, { useEffect, useState } from 'react';
import LCC from 'lightning-container'
import AccountsList from '../components/AccountsList'
import { Button } from '@salesforce/design-system-react'

interface ApexResponseEvent {
	statusCode: number;
}

interface Account {
	Name: string;
	Id: string;
}

function AccountContainer() {
	const [hasAccounts] = useState(false);
	const [accounts, setAccounts] = useState([]);

	useEffect(() => {
		getAccounts();
	}, [hasAccounts]);

	const getAccounts = () => {
		// @ts-ignore
		LCC.callApex(
			'AccountService.getAccounts',
			(result: Account[], event: ApexResponseEvent) => {
				console.log('Get Accounts: ', result, event)
				if (event.statusCode >= 200 && event.statusCode < 300) {
					setAccounts(result);
				} else {
					console.error('There was an error getting data from apex', event)
				}
			},
			{ escape: true }
		)
	}

	return (
		<>
			<p>AccountContainer</p>
			<AccountsList accounts={accounts} />
			<Button label="reLoad Accounts" onClick={getAccounts} />
		</>
	)
}

export default AccountContainer;
