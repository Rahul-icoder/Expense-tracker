import React,{useContext} from 'react';
import styled from "styled-components";
import Title from "./Title";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import History from "./History";
import Transaction from "./Transaction";
import { BiLogOutCircle } from "react-icons/bi";
import {Global} from '../../context/GlobalContext'
const Main = styled.div`
	display:flex;
	width:500px;
	flex-direction:column;
	align-items:flex-start;
	position:relative;
	.log-icon{
		position: absolute;
		right: 0;
		font-size: 3rem;
		color: white;
		border-radius:50%;
		height:50px;
		width:50px;
		background-color:#12233e;
		transform: rotate(180deg);
		top: 1px;
		padding-left: 1px;
	}
`
const HomeContainer = () => {
	const {logout} = useContext(Global)
	return (
		<Main>
		<button className="log-icon" onClick={logout}><BiLogOutCircle/></button>
			<Title/>
			<Balance/>
			<IncomeExpense/>
			<History/>
			<Transaction/>
		</Main>
	)
}

export default HomeContainer