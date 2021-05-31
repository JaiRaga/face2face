import { combineReducers } from 'redux'
import dashboard from './reducers/dashboard'

const rootreducer = combineReducers({
	dashboard,
})

export default rootreducer
