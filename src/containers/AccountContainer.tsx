import React, { useState, useEffect } from 'react';
import * as LCC from 'lightning-container'
import AccountsList from '../components/AccountsList'
import { Button } from '@salesforce/design-system-react'

function AccountContainer(props) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('react use effect')
		// Update the document title using the browser API
		document.title = `You clicked ${count} times`;

		// @ts-ignore
		LCC.callApex(
			'AccountService.getAccounts',
			// this.handleApexRequest
			(result: any, event: any) => handleApexRequest(result, event)
		), { escape: true };
	});

	function handleApexRequest(result: any, event: { statusCode: number }) {
		console.log('Get Accounts: ', result, event)
		if (event.statusCode >= 200 && event.statusCode < 300) {
			// this.setState({
			// 	accounts: result
			// })
		} else {
			console.error('There was an error getting data from apex', event)
		}
	}

	console.log(props);
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
			<p>AccountContainer</p>
			{/* <AccountsList accounts={(this.state as any).accounts} />
			<Button label="reLoad Accounts" /> */}
		</div>
	)
}

export default AccountContainer;

// export default class AccountContainer extends React.Component {
// 	constructor() {
// 		super(null)
// 		this.state = {
// 			accounts: []
// 		}
// 	}

// 	componentDidMount() {
// 		// @ts-ignore
// 		LCC.callApex(
// 			'AccountService.getAccounts',
// 			// this.handleApexRequest
// 			(result: any, event: any) => this.handleApexRequest(result, event)
// 		), { escape: true };
// 	}

	// handleApexRequest(result: any, event: { statusCode: number }) {
	// 	console.log(result, event)
	// 	if (event.statusCode >= 200 && event.statusCode < 300) {
	// 		this.setState({
	// 			accounts: result
	// 		})
	// 	} else {
	// 		console.error('There was an error getting data from apex', event)
	// 	}
	// }

// 	render() {
// 		console.log('account container', (this.state as any).accounts)
// 		return (
// 			<>
				// <p>AccountContainer</p>
				// <AccountsList accounts={(this.state as any).accounts} />
				// <Button label="reLoad Accounts" />
// 			</>
// 		)
// 	}
// }