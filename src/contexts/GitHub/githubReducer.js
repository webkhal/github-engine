import {
	SET_LOADING,
	SET_REPOS,
	SET_USERS,
	SET_USER,
	SET_ALERT,
} from "../../types";

const reducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};

		case SET_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};

		case SET_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};

		case SET_ALERT:
			return {
				...state,
				alert: action.payload,
			};

		case SET_REPOS:
			return {
				...state,
				repos: action.payload,
                loading:false
			};

		default:
			throw new Error("Action Not Found");
	}
};

export default reducer;
