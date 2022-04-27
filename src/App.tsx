import React, { useState, useEffect } from 'react'
import * as LCC from 'lightning-container'
import './App.css'
import TerminalScreen from './TerminalScreen'
import Counter from './Counter'
import AccountContainer from './containers/AccountContainer'

interface Message {
    name: string;
    value: string;
}

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        LCC.addMessageHandler(messageRecievedHandler)
    });


    const messageRecievedHandler = (msg: Message) => {
        setMessage(msg.value);
    }

    return (
        <>
            <h1>Here is a test title</h1>
            <TerminalScreen text={message} />
            <Counter />
            <AccountContainer />
        </>
    )
}

export default App;
