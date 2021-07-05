import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import PostListScreen from './screens/PostListScreen.jsx'

function App() {
	return (
		<div className="grid-container">
			<BrowserRouter>
				<Header></Header>

				<main>
					<Route path='/' component={PostListScreen} exact />
				</main>

			</BrowserRouter>
		</div>
	)
}

export default App
