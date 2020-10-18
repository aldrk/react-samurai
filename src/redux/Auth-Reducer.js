import {authAPI} from "../Api/autiAPI";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload
			};
		}
		default:
			return state;
	}
}

export const setUserData = (id, login, email, isAuth) => {
	return {
		type: SET_USER_DATA,
		payload: {id, login, email, isAuth}
	};
};

export const authMe = () => async (dispatch) => {
	let response = await authAPI().me();
	if (response.resultCode === 0) {
		let {id, login, email} = response.data;
		dispatch(setUserData(id, login, email, true));
	}
};

export const login = (email, password, rememberMe) => async (dispatch) => {
	let response = await authAPI().login(email, password, rememberMe);
	if (response.resultCode === 0) {
		dispatch(authMe());
	} else {
		if (response.messages.length > 0) {
			let message = response.messages[0];
			dispatch(stopSubmit('login', {_error: message}));
		}
	}
};

export const logout = () => async (dispatch) => {
	let result = await authAPI().logout()
	if (result.resultCode === 0) {
		dispatch(setUserData(null, null, null, false));
	}
};

export default authReducer;