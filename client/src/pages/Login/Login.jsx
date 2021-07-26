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

	const onSubmit = async(e) =>{
		e.preventDefault()
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
			<form onSubmit={onSubmit}>
				<Div>
					<label htmlFor="">Username</label>
					<Input name="username" type="text" onChange={handleChange} value={data.username} required/>
				</Div>
				<Div>
					<label htmlFor="">Password</label>
					<Input name="password" type="password" onChange={handleChange} value={data.password} required/>
				</Div>
				<Div>
					<Button type="sumit">Login</Button>
				</Div>
			</form>
			<Div>
				<Link to="/register" className="redirect-register">CLICK HERE FOR REGISTER</Link>
			</Div>
			<Div>
				<Link to="/forget_password" className="forget-password">FORGET PASSWORD</Link>
			</Div>
		</LoginContainer>
	)
}

export default Login