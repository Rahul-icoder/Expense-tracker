import React,{useContext} from 'react';
import Home from "../pages/Home"
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import {Global} from '../context/GlobalContext';


const Container = () => {
	const {authState} = useContext(Global);
	console.log(authState)
	return (
		<Router>
			<Switch>
				<Route path="/register" render={()=>authState.user ? <Redirect to="/"/>:<Register/>}/>
				<Route exact path="/" render={()=>authState.user ? <Home/>:<Redirect to="/login"/>}/>
				<Route  path="/login" render={()=>authState.user ? <Redirect to="/"/>:<Login/>}/>
			</Switch>
		</Router>
	)
}

export default Container