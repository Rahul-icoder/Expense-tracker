import React,{useState} from 'react'
import {Input,LoginContainer,Div,Button,Error} from './style'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios';

function Register() {
	const history = useHistory();
	const [data, setData] = useState({
		username:"",
		password:"",
	})
	const [error, setError]	 = useState(false)
	const [confirmPassword, setConfirmPassword] = useState()

	const handleChange = ({target}) =>{
		setError(false)
		setData(prev=>({...prev,[target.name]:target.value}))
	}

	const onSubmit = async() =>{
		console.log(data)
		if(data.password === confirmPassword){
			const res = await axios.post('http://localhost:5000/auth/register',data)
			console.log(res)
			if(res.data.error){
				setError(true)
				return
			}
			history.push('/login')
		}
		alert('password not matched')
	}

	return (
		<LoginContainer>
			{error && <Error>Username Already Exits</Error>}
			<Div>
				<label htmlFor="">Username</label>
				<Input name="username" type="text" onChange={handleChange} value={data.username}/>
			</Div>
			<Div>
				<label htmlFor="">Password</label>
				<Input name="password" type="password" onChange={handleChange} value={data.password}/>
			</Div>
			<Div>
				<label htmlFor="">Confirm Password</label>
				<Input name="confirmPassword" type="password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
			</Div>
			<Div>
				<Button type="button" onClick={onSubmit}>Register</Button>
			</Div>
			<Div>
				<Link to="/login" className="redirect-login">click here for login</Link>
			</Div>
		</LoginContainer>
	)
}

export default Register