import React,{useState} from 'react'
import {ForgetPasswordContainer,Div,Input,label,Button} from "./style"
import axios from "axios";
import {Link,useHistory} from 'react-router-dom';
const ForgetPassword = () => {
	const history = useHistory()
	const [email, setEmail] = useState(null)
	const [error,setError] = useState(null)
	const [msg,setMsg] = useState(null)
	const [loading,setLoading] = useState(false);
	const onSubmit = async(e) => {
		e.preventDefault()
		setLoading(true)
		const res = await axios.post('/auth/forgetpassword',{email});
		if(res.data.error?.status===500)
			setError('Provide Valid Email Address')
		if(res.data.status==="success"){
			setMsg('link will be sent to email, checkout now')
			setEmail(null)
			return
		}
		setLoading(false)
	}
	const handleChange = ({target}) =>{
		setEmail(target.value)
		setError(null)
	}

	const backHome = () =>{
		history.push('/')
	}

	if(msg){
		return(
			<ForgetPasswordContainer>
				<div style={{display:'flex',flexDirection:'column'}}>
					<h3 className="success">link will be sent to email, checkout now</h3>
					<Button style={{width:'150px',margin:'auto'}} onClick={backHome}>Back to Login</Button>
				</div>
			</ForgetPasswordContainer>
		)
	}
	return (
		<ForgetPasswordContainer>
			<form className="form-container" onSubmit={onSubmit}>
				<h4 className="error-message">{error}</h4>
				<Div>
					<label htmlFor="">Email</label>
					<Input name="email" type="eamil" value={email} onChange={handleChange}/>
				</Div>
				<Div>
					<Button type="submit">{loading ? 'loading...' : 'Submit'}</Button>
				</Div>
				<Div>
					<Link to="/login" className="redirect-login">CLICK HERE FOR LOGIN</Link>
				</Div>
			</form>
		</ForgetPasswordContainer>
	)
}

export default ForgetPassword