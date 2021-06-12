import React,{useState,useContext} from 'react'
import {AddTransactionContainer,Input,Button} from './style'
import {Global} from "../../../context/GlobalContext"
import { nanoid } from 'nanoid'

const AddTransaction = () => {
	const {addTransaction,authState} = useContext(Global)
	const [data, setData] = useState({
		transactionId: nanoid(),
		title:"",
		amount:"",
	})
	const handleChange = ({target}) =>{
		setData(prev=>({...prev,[target.name]:target.value}))
	}

	const onSubmit = () =>{
		if(data.title && data.amount){
			data.date = new Date()
			data.userId = authState.user._id;
			addTransaction(data)
			setData({
				transactionId:nanoid(),
				title:"",
				amount:""
			})
		}
	}

	return (
		<AddTransactionContainer>
			<label>Item</label>
			<Input type="text" name="title" value={data.title} onChange={handleChange}/>
			<label>Amount <span>(negative - expense,positive - income)</span></label>
			<Input type="number" name="amount" value={data.amount} onChange={handleChange}/>
			<Button type="button" onClick={onSubmit}>Add Transaction</Button>
		</AddTransactionContainer>
	)
}

export default AddTransaction