import React from 'react'
import {TransactionContainer} from './style'
import AddTransaction from './AddTransaction'

const Transaction = () => {
	return (
		<TransactionContainer>
			<p className="title">Add Transaction</p>
			<hr/>
			<AddTransaction/>		
		</TransactionContainer>
	)
}

export default Transaction