import React from 'react'

// const Account = account => <div>{account.Id} - {account.Name}</div>
// const Account = (props) => {
// 	console.log('account props', props)
// 	return <div>{props.account.name}</div>
// }

// export default Account

export default class Account extends React.Component {
	render() {
		console.log('account props', this.props)
		return <div>{this.props.account.Name}</div>
	}
}