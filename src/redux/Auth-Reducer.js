import {authAPI} from "../Api/autiAPI";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type){
		case SET_USER_DATA:{
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

export const authMe = () => (dispatch) => {
	return authAPI().me().then(data => {
		if (data.resultCode === 0) {
			let {id, login, email} = data.data;
			dispatch(setUserData(id, login, email, true));
		}
	});
};

export const login = (email, password, rememberMe) => (dispatch) => {
	 authAPI().login(email, password, rememberMe).then(data => {
		if (data.resultCode === 0) {
			dispatch(authMe());
		} else {
			if (data.messages.length > 0) {
				let message = data.messages[0];
				dispatch(stopSubmit('login', {_error: message}));
			}
		}
	});
};

export const logout = () => (dispatch) =>{
	authAPI().logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(setUserData(null, null, null, false));
		}
	});
};

export default authReducer;