import React from 'react'
import {AddTransactionContainer,Input,Button} from './style'

const AddTransaction = () => {
	return (
		<AddTransactionContainer>
			<label>Item</label>
			<Input/>
			<label>Amount <span>(negative - expense,positive - income)</span></label>
			<Input/>
			<Button>Add Transaction</Button>
		</AddTransactionContainer>
	)
}

export default AddTransaction