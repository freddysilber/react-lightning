import React from 'react'
import LCC from 'lightning-container'
import './App.css'
import TerminalScreen from './TerminalScreen.js'
import Counter from './Counter'
import AccountsList from './components/AccountsList'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "",
            accounts: []
        }
    }

    componentDidMount() {
        LCC.addMessageHandler(this.messageRecievedHandler)
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

    messageRecievedHandler = msg => {
        const { name, value } = msg
        console.log('Messaged received.', name, value)
        this.setState({
            message: value
        })
    }

    renderAccounts = () => this.state.accounts.map(a => <div key={a.Id}>{a.Name}</div>)

    render() {
        return (
            <div>
                <h1>Here is a test title</h1>
                <TerminalScreen text={this.state.message} />
                <Counter />
                <AccountsList />
                {this.renderAccounts()}
            </div>
        )
    }
}