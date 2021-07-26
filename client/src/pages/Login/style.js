import styled from 'styled-components'

export const Div = styled.div`
	display:flex;
	flex-direction:column;
	width:80%;
	margin:0.7rem auto;
	label{
		color:grey;
		padding-bottom:0.4rem;
		font-size:1rem;
		font-weight:600;
	}
	.redirect-register{
		text-decoration:none;
		text-align:center;
		font-size:1.2rem;
		color:grey;
		font-weight:600;
		margin-top:1rem;
	}
	.forget-password{
		text-decoration:none;
		text-align:center;
		font-size:1.2rem;
		color:grey;
		font-weight:600;
		margin-top:1rem;
	}
`

export const LoginContainer = styled.div`
	width:400px;
	border-radius:10px;
	background: #f0f2f0;
	box-shadow: 0px 0px 56px 2px rgba(0,0,0,0.75);
	padding: 2rem 1.6rem;
`

export const Input = styled.input`
	padding: 0.2rem 1rem;
	height: 35px;
	font-size: 1.1rem;
	letter-spacing: 0.3px;
	border: 2px solid grey;
	border-radius:4px;
	outline:none;
`
export const Button = styled.button`
	padding: 0.8rem;
	margin-top:0.5rem;
	font-size: 1.2rem;
	background-color: #4a4a57;
	color: white;
	border: 2px solid grey;
	border-radius:4px;
	cursor:pointer;
	text-align:center;
	:hover{
		background-color:#25252b;
	}
`

export const Error = styled.p`
	font-size:1rem;
	color:red;
	text-align:center;
`

