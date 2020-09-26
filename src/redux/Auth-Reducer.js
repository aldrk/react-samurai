import {authAPI} from "../Api/autiAPI";

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
				...action.data,
				isAuth: true
			};
		}
		default:
			return state;
	}
}

export const setUserData = (id, login, email) => {
	return {
		type: SET_USER_DATA,
		data: {
			id,
			login,
			email
		}
	};
};

export const authMe = () => (dispatch) => {
	authAPI().then(data => {
		if (data.resultCode === 0) {
			let {user, login, id} = data.data;
			dispatch(setUserData(user, login, id));
		}
	});
};

export default authReducer;