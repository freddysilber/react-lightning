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
            name: '',
            accounts: []
        }
    }

    componentDidMount() {
        LCC.addMessageHandler(this.messageRecievedHandler)
        this.handleGetAccounts()
    }

    handleGetAccounts = () => {
        LCC.callApex('AccountService.getAccounts',
            (result, event) => {
                console.log(result, event)
            }), { escape: true }
    }

    messageRecievedHandler = msg => {
        const { name, value } = msg
        console.log("Messaged received.")
        console.log(`Message name: ${name}`)
        console.log(`Message value: ${value}`)
        // Add Any Logic that should be handled here.
        this.setState({
            message: value
        })
    }

    // The Render Functiion is what defines the markup of our component.
    render() {
        return (
            <div>
                <h1>Here is a test title</h1>
                <button onClick={this.handleGetAccounts}>Get Accounts</button>
                <TerminalScreen text={this.state.message} />
                <Counter />
                <AccountsList />
            </div>
        )
    }
}