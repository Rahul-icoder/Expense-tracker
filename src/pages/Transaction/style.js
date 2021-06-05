import styled from 'styled-components'

export const TransactionContainer = styled.div`
	width:100%;
	box-sizing:border-box;
	.title{
		font-size: 1.6rem;
		font-weight:500;
		margin-top: 1.2rem;
	}
`
export const AddTransactionContainer = styled.div`
	display: flex;
	flex-direction: column;
	label{
		font-size:1.2rem;
		margin:0.3rem 0;
	}
	span{
		font-size:0.9rem;
	}
`
export const Input = styled.input`
	padding: 0.2rem 1rem;
	height: 35px;
	font-size: 1.1rem;
	letter-spacing: 0.3px;
	border: 2px solid #25252b;
	outline:none;
`

export const Button = styled.button`
	margin: 1rem 0;
	padding: 0.8rem;
	font-size: 1.2rem;
	background-color: #4a4a57;
	color: white;
	border: 2px solid #25252b;
	cursor:pointer;
	:hover{
		background-color:#25252b;
	}
`