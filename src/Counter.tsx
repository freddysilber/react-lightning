import React, { useState } from 'react'

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Count: {count}</h1>
			<button className="slds-button" onClick={() => setCount(count + 1)}>+</button>
			<button className="slds-button" onClick={() => setCount(count - 1)}>-</button>
		</>
	)
}

export default Counter;