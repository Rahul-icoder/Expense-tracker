import React from 'react'
import Detail from "./Detail"
import {HistoryContainer} from './style'
const History = () => {
	return (
		<HistoryContainer>
			<p className="title">History</p>
			<hr/>
			<Detail/>			
		</HistoryContainer>
	)
}

export default History