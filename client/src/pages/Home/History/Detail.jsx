import React,{useContext} from 'react'
import {DetailCard,IconButton} from './style'
import {Global} from "../../../context/GlobalContext"
import { FaRegTimesCircle } from "react-icons/fa";

const Detail = ({item}) => {
	const {deleteTransaction} = useContext(Global)
	const sign 	 = 	Number(item.amount) > 0 ? '+' : '-'
	const amount =  Number(item.amount) > 0 ? item.amount : -(item.amount)
	return (
		<DetailCard borderColor={sign==='+'?'#059505':'#d73c3c'}>
			<IconButton><FaRegTimesCircle onClick={()=>deleteTransaction(item.transactionId)}/></IconButton>
			<p>{item.title}</p>
			<p>{sign}Rs {amount}</p>
		</DetailCard>
	)
}

export default Detail