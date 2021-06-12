import React,{useContext} from 'react'
import {Card} from './style'
import {Global} from '../../../context/GlobalContext';

const Income = () => {
	const {state} = useContext(Global);
	let incomes;
	let total_income;
	if(state.transactions.length){
		incomes = state.transactions.map(transaction=>Number(transaction.amount));
		total_income = incomes.filter(income=>income>0).reduce((acc,income)=>(acc+=income),0).toFixed(2)
	}
	return (
		<Card>
			<p>INCOME</p>
			<p>+Rs {total_income ? total_income : '0.00'}</p>
		</Card>
	)
}

export default Income