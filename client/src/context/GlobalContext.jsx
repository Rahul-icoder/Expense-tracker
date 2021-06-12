import React,{createContext,useReducer,useEffect} from 'react'
import appReducer from "./appReducer"
import authReducer from "./authReducer"
import axios from "axios";
const initialState = {
	transactions : [],
	user:null,
	error:null,
	loading:true
}
export const Global = createContext(initialState);
const GlobalContext = ({children}) => {
	const [state, dispatch] = useReducer(appReducer, initialState);
	const [authState,authDispatch] = useReducer(authReducer,initialState);
	//Expense Action

	const getTransaction = async(userId) =>{
		try{
			const res = await axios.get(`/api/get/transactions/${userId}`)
			dispatch({type:'GET_TRANSACTION',data:res.data})
		}catch(error){
			dispatch({type:'ERROR',error:error.message})
		}
	}

	const deleteTransaction = async(id)=>{
		try{
			await axios.delete(`/api/delete/transaction/${id}`)
			dispatch({type:'DELETE_TRANSACTION',transactionId:id})
		}catch(error){
			dispatch({type:'ERROR',error:error.message})
		}
	}

	const addTransaction = async(data)=>{
		try{
			await axios.post('/api/add/transaction',data)
			dispatch({type:"ADD_TRANSACTION",data:data})
		}catch(error){
			dispatch({type:'ERROR',error:error.message})
		}
	}

	//auth reducer

	function login(){
		axios.get('/auth/user',{
			withCredentials: true
		})
			.then(res=>{
				if(res.data.error){
					authDispatch({type:'ERROR',error:"Not Authorized"})
					return;
				}
				authDispatch({type:"LOGIN",user:res.data})
			}).catch(error=>{
				authDispatch({type:'ERROR',error:error.message})
			})
	}

	useEffect(()=>{
		login()
	},[])

	const logout = async() =>{
		try{
			const res = await axios.post('/auth/logout',null,{
				withCredentials:true
			});
			console.log(res.data)
			if(res.data.error){
					authDispatch({type:'ERROR',error:res.data.error})
					return;
			}
			authDispatch({type:"LOGOUT"})
		}catch(error){
			authDispatch({type:'ERROR',error:error.message})
		}
	}

	const value = {state,authState,authDispatch,login,logout,deleteTransaction,getTransaction,addTransaction}
	return (
		<Global.Provider value={value}>
			{children}
		</Global.Provider>
	)
}

export default GlobalContext