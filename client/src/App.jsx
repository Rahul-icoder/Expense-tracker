import React from 'react';
import Container from './container';
import GlobalContext from "./context/GlobalContext"

const App = () => {
	return (
		<GlobalContext>
			<Container/>
		</GlobalContext>
	)
}

export default App