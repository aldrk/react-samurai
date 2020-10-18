import {authMe} from "./Auth-Reducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

const initialState = {
	initialized: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type){
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true
			}
		default:
			return state;
	}
};

const initializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => async (dispatch) => {
	await dispatch(authMe());
	dispatch(initializedSuccess());
};

export default appReducer;