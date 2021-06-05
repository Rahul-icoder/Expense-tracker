
const appReducer = (state,action) => {
	switch(action.type){
		case "DELETE_TRANSACTION":
			return{
			 	...state,
			 	transactions:state.transactions.filter(item=>item.transactionId!==action.transactionId)
			}
		case "ADD_TRANSACTION":
			return{
				...state,
				transactions:[...state.transactions,action.data]
			}
		case "GET_TRANSACTION":
			return{
				...state,
				transactions:action.data,
				loading:false
			}
		case "ERROR":
			return{
				...state,
				error:action.error
			}
		default:
			return state
	}	
}

export default appReducer;