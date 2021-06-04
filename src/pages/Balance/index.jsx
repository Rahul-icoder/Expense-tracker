import React from 'react'
import {BalanceContainer} from "./style.js"
const Balance = () => {
	return (
		<BalanceContainer>
			<p className="balance-title">Your Balance</p>
			<p className="balance-value">Rs 0.00</p>
		</BalanceContainer>
	)
}

export default Balance