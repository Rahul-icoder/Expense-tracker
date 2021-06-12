import React,{useState,useContext} from 'react'
import {Input,LoginContainer,Div,Button,Error} from './style'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios';
import {Global} from '../../context/GlobalContext';

function Login() {
	const history = useHistory();
	const {login} = useContext(Global)
	const [data, setData] = useState({})
	const [error, setError]	 = useState(false)

	const handleChange = ({target}) =>{
		setError(false)
		setData(prev=>({...prev,[target.name]:target.value}))
	}

	const onSubmit = async() =>{
		const res = await axios.post('/auth/login',data, {
			withCredentials: true
		})
		if(res.data.error){
			setError(true)
			return
		}
		login();
		history.push('/')
	}

	return (
		<LoginContainer>
			{error && <Error>Invalid Username and Password</Error>}
			<Div>
				<label htmlFor="">Username</label>
				<Input name="username" type="text" onChange={handleChange} value={data.username}/>
			</Div>
			<Div>
				<label htmlFor="">Password</label>
				<Input name="password" type="password" onChange={handleChange} value={data.password}/>
			</Div>
			<Div>
				<Button type="button" onClick={onSubmit}>Login</Button>
			</Div>
			<Div>
				<Link to="/register" className="redirect-register">click here for register</Link>
			</Div>
		</LoginContainer>
	)
}

export default Login