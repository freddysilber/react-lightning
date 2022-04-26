import * as React from 'react'
import * as LCC from 'lightning-container'
import './App.css'
import TerminalScreen from './TerminalScreen'
import Counter from './Counter'
import AccountContainer from './containers/AccountContainer'

export default class App extends React.Component {

    constructor(props: any) {
        super(props)
        this.state = {
            message: ""
        }
    }

    componentDidMount() {
        LCC.addMessageHandler(this.messageRecievedHandler)
    }

    messageRecievedHandler = (msg: any) => {
        const { name, value } = msg
        console.log('Messaged received.', name, value)
        this.setState({
            message: value
        })
    }

    render() {
        return (
            <>
                <h1>Here is a test title</h1>
                <TerminalScreen text={(this.state as any).message} />
                <Counter />
                <AccountContainer />
            </>
        )
    }
}