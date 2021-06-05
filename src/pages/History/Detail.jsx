import React,{useContext} from 'react'
import {DetailCard,Button} from './style'
import {Global} from "../../context/GlobalContext"

const Detail = ({item}) => {
	const {deleteTransaction} = useContext(Global)
	const sign 	 = 	Number(item.amount) > 0 ? '+' : '-'
	const amount =  Number(item.amount) > 0 ? item.amount : -(item.amount)
	return (
		<DetailCard borderColor={sign==='+'?'#059505':'#d73c3c'}>
			<Button onClick={()=>deleteTransaction(item.transactionId)}>X</Button>
			<p>{item.title}</p>
			<p>{sign}Rs {amount}</p>
		</DetailCard>
	)
}

export default Detail