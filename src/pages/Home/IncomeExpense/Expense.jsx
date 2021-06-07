import React,{useContext} from 'react'
import {Card} from './style'
import {Global} from "../../../context/GlobalContext"
const Expense = () => {
	const {state} = useContext(Global);
	let expenses;
	let total_expense;
	if(state.transactions.length){
		expenses = state.transactions.map(transaction=>Number(transaction.amount));
		total_expense = expenses.filter(expense=>expense<0).reduce((acc,expense)=>(acc+=expense),0).toFixed(2)
	}
	return (
		<Card>
			<p>EXPENSE</p>
			<p>-Rs {total_expense ? -(total_expense) : '0.00'}</p>
		</Card>
	)
}

export default Expense