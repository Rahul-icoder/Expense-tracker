import React from 'react'
import Income from './Income'
import Expense from './Expense'
import {IncomeExpenseContainer} from './style'


const IncomeExpense = () => {
	return (
		<IncomeExpenseContainer>
			<Income/>
			<Expense/>
		</IncomeExpenseContainer>
	)
}

export default IncomeExpense