import React from 'react'
import Login from './Login'
import styled from 'styled-components'

const Main = styled.div`
	display:flex;
	width:100vw;
	height:100vh;
	justify-content:center;
	align-items: center;
`
const LoginContainer = () => {
	return (
		<Main>
			<Login/>	
		</Main>
	)
}

export default LoginContainer