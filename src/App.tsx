import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import PostsScreen from './screens/PostsScreen'

const App: React.FC = () => {
	return (
		<div className="grid-container">
			<BrowserRouter>
				<Header></Header>

				<main>
					<Route path='/' component={PostsScreen} exact />
				</main>

			</BrowserRouter>
		</div>
	)
}

export default App
