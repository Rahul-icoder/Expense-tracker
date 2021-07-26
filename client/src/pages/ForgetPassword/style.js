import styled from "styled-components"
export const ForgetPasswordContainer = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	height:100%;
	.redirect-login{
		text-decoration:none;
		text-align:center;
		font-size:1.2rem;
		color:grey;
		font-weight:600;
		margin-bottom:2rem;
	}
	.form-container{
		background: #f0f2f0;
		box-shadow: 0px 0px 40px 1px rgba(0,0,0,0.75);
		width:400px;
		border-radius:6px;
		display:flex;
		flex-direction:column;
		justify-content:center;
	}
	.error-message{
		font-size:1.1rem;
		text-align:center;
		color:tomato;
	}
	.success{
		color:#dfbebe;
		background-color:#4a4a57;
		font-size:1.3rem;
		padding:1.2rem;
		border-radius:2rem;
	}
`

export const Div = styled.div`
	display:flex;
	flex-direction:column;
	width:80%;
	margin:0.5rem auto;
	label{
		color:grey;
		padding-bottom:0.4rem;
		font-size:1rem;
		font-weight:600;
	}
`

export const Input = styled.input`
	padding: 0.2rem 1rem;
	height: 35px;
	font-size: 1.1rem;
	letter-spacing: 0.3px;
	border-radius:4px;
	border: 2px solid grey;
	outline:none;
`

export const Button = styled.button`
	padding: 0.8rem;
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