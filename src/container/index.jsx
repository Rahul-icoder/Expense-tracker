import React from 'react';
import styled from "styled-components";
import Title from "../pages/Title";
import Balance from "../pages/Balance";
import IncomeExpense from "../pages/IncomeExpense";

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
		</Main>
	)
}

export default Container