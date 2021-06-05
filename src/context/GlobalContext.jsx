import React,{createContext,useReducer} from 'react'
import appReducer from "./appReducer"
import axios from "axios";
const initialState = {
	transactions : [],
	error:null,
	loading:true
}
export const Global = createContext(initialState);
const GlobalContext = ({children}) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	const getTransaction = async() =>{
		try{
			const res = await axios.get('http://localhost:5000/api/get/transactions')
			dispatch({type:'GET_TRANSACTION',data:res.data})
		}catch(error){
			dispatch({type:'ERROR',error:error.message})
		}
	}

	const deleteTransaction = async(id)=>{
		try{
			await axios.delete(`http://localhost:5000/api/delete/transaction/${id}`)
			dispatch({type:'DELETE_TRANSACTION',transactionId:id})
		}catch(error){
			dispatch({type:'ERROR',error:error.message})
		}
	}

	const addTransaction = async(data)=>{
		try{
			await axios.post('http://localhost:5000/api/add/transaction',data)
			dispatch({type:"ADD_TRANSACTION",data:data})
		}catch(error){
			dispatch({type:'ERROR',error:error.message})
		}
	}

	const value = {state,dispatch,deleteTransaction,getTransaction,addTransaction}
	return (
		<Global.Provider value={value}>
			{children}
		</Global.Provider>
	)
}

export default GlobalContext