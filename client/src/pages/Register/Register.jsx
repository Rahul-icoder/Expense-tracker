import React,{useState} from 'react'
import {Input,RegisterContainer,Div,Button,Error} from './style'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios';

function Register() {
	const history = useHistory();
	const [data, setData] = useState({
		username:"",
		password:"",
		email:""
	})
	const [error, setError]	 = useState(false)
	const [confirmPassword, setConfirmPassword] = useState()

	const handleChange = ({target}) =>{
		setError(false)
		setData(prev=>({...prev,[target.name]:target.value}))
	}

	const submitForm = async(e) =>{
		e.preventDefault()
		if(data.password === confirmPassword){
			const res = await axios.post('/auth/register',data)
			console.log(res)
			if(res.data.error){
				setError(true)
				return
			}
			history.push('/login')
			return
		}
		alert('password not matched')
	}

	return (
		<RegisterContainer>
			{error && <Error>Username Already Exits</Error>}
			<form onSubmit={submitForm}>
				<Div>
					<label htmlFor="">Email</label>
					<Input name="email" type="email" onChange={handleChange} value={data.email} required/>
				</Div>
				<Div>
					<label htmlFor="">Username</label>
					<Input name="username" type="text" onChange={handleChange} value={data.username} required/>
				</Div>
				<Div>
					<label htmlFor="">Password</label>
					<Input name="password" type="password" onChange={handleChange} value={data.password} required />
				</Div>
				<Div>
					<label htmlFor="">Confirm Password</label>
					<Input name="confirmPassword" type="password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} required />
				</Div>
				<Div>
					<Button type="submit">Register</Button>
				</Div>
			</form>
			<Div>
				<Link to="/login" className="redirect-login">CLICK HERE FOR LOGIN</Link>
			</Div>
		</RegisterContainer>
	)
}

export default Register