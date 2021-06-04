import React from 'react';
import styled from "styled-components";
import Title from "../pages/Title";
import Balance from "../pages/Balance";
import IncomeExpense from "../pages/IncomeExpense";
import History from "../pages/History";
import Transaction from "../pages/Transaction";

const Main = styled.div`
	display:flex;
	width:500px;
	flex-direction:column;
	align-items:flex-start;
`
const Container = () => {
	return (
		<Main>
			<Title/>
			<Balance/>
			<IncomeExpense/>
			<History/>
			<Transaction/>
		</Main>
	)
}

export default Container