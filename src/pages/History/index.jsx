import React,{useContext,useEffect} from 'react'
import Detail from "./Detail"
import {HistoryContainer} from './style'
import {Global} from "../../context/GlobalContext"
const History = () => {
	const {state,getTransaction} = useContext(Global)
	useEffect(() => {
		getTransaction()
		// eslint-disable-next-line
	}, [])
	const transactions = state.transactions.slice(Math.max(state.transactions.length - 5, 0))
	return (
		<HistoryContainer>
			<p className="title">History</p>
			<hr/>
			{transactions.map(item=><Detail item={item} key={item.transactionId}/>)}			
		</HistoryContainer>
	)
}

export default History