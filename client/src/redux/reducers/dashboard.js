import { DASH_SET_USERNAME } from '../actions/types'

const initialState = {
	username: '',
}

const dashboard = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case DASH_SET_USERNAME:
			return {
				...state,
				username: payload,
			}

		default:
			return state
	}
}

export default dashboard
