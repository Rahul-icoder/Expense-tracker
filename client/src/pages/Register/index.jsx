import React from 'react'
import Register from './Register'
import styled from 'styled-components'

const Main = styled.div`
	display:flex;
	width:100vw;
	height:100vh;
	justify-content:center;
	align-items: center;
`
function RegisterContainer() {
	return (
		<Main>
			<Register/>
		</Main>
	)
}

export default RegisterContainer