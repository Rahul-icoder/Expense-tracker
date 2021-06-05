import styled from 'styled-components'
export const HistoryContainer = styled.div`
	width:100%;
	box-sizing:border-box;
	position:relative;
	.title{
		font-size: 1.6rem;
		font-weight:500;
		margin-top: 1.2rem;
	}
`

export const DetailCard = styled.div`
	width:93.6%;
	display:flex;
	padding:1rem;
	color:white;
	justify-content:space-between;
	border-right-width: 4px;
	border-right-color: ${(props)=>props.borderColor};
	border-right-style: solid;
	background-color:#12233e;
	margin-top: 0.3rem;
	p{
		margin:0;
		font-size:1.2rem;
	}
`
export const Button = styled.button`
	position: absolute;
	left: -47px;
	font-size: 1.3rem;
	color: white;
	background-color: #46484d;
`