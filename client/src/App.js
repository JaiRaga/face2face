import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { connectToWebSocket } from './utils/connectToWebSocket'
import store from './redux/store'

import './App.css'

import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'

function App() {
	useEffect(() => {
		connectToWebSocket()
	}, [])
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route exact path='/login' component={Login} />
				</Switch>
			</Router>
		</Provider>
	)
}

export default App
