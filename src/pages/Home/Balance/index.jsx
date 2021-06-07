import React,{useContext} from 'react'
import {BalanceContainer} from "./style.js"
import {Global} from "../../../context/GlobalContext"

const Balance = () => {
	const {state} = useContext(Global)

	let amounts;
	let total;
	if(state.transactions.length){
		amounts = state.transactions.map(transaction=>Number(transaction.amount))
		total = amounts.reduce((acc,amount,index)=>acc+=amount).toFixed(2)
	}
	return (
		<BalanceContainer>
			<p className="balance-title">Your Balance</p>
			<p className="balance-value">Rs {total ? total:'00.0'}</p>
		</BalanceContainer>
	)
}

export default Balance