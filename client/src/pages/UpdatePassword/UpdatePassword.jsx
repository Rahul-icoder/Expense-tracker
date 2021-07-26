import React,{useEffect,useState} from 'react'
import {UpdatePasswordContainer,Container,Div,Button,Error,Input} from "./style"
import axios from "axios"
import {useParams} from "react-router-dom"
function UpdatePassword() {
	const {token} = useParams()
	const [username,setUsername] = useState(null);
	const [error,setError] = useState(null)
	const [password,setPassword] = useState(null)
	const [confirmPassword,setConfirmPassword] = useState(null)
	const [isSuccess,setIsSuccess] = useState(false)
	const [passwordAlert,setPasswordAlert] = useState(null);
	useEffect(()=>{
		axios.get(`/auth/reset/${token}`).then(res=>{
			if(res.data.error?.status===500){
				setError('Link has been expires or not valid')
			}
			if(res.data.username){
				setUsername(res.data.username);
			}
		})
	},[])
	const onSubmit = async(e) => {
		e.preventDefault()
		if(password===confirmPassword){
			const res = await axios.patch('/auth/updatepasswordviaemail',{username,password});
			console.log(res)
			if(res.data.status==="success"){
				setIsSuccess(true)
			}
			return
		}
		setPasswordAlert('password not match')
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
		setPasswordAlert(null)
	}

	const handleConfirmPassword = (e) => {
		setConfirmPassword(e.target.value)
		setPasswordAlert(null)
	}

	if(isSuccess){
		return (
			<Container>
				<h3 className="warning">Password Change Successfully</h3>
			</Container>
		)
	}
	return (
		<Container>
			{username ? <UpdatePasswordContainer>
							{passwordAlert && <h3 style={{color:'red',textAlign:'center'}}>{passwordAlert}</h3>}
							<form onSubmit={onSubmit}>
								<Div>
									<label htmlFor="">Password</label>
									<Input name="password" type="password" value={password}  onChange={handlePassword} required/>
								</Div>
								<Div>
									<label htmlFor="">Confirm Password</label>
									<Input name="confirmpassword" type="password" value={confirmPassword} onChange={handleConfirmPassword} required/>
								</Div>
								<Div>
									<Button type="submit">Update</Button>
								</Div>
							</form>
						</UpdatePasswordContainer>
						:
						<h3 className="warning">{error}</h3>
				}
		</Container>
	)
}

export default UpdatePassword