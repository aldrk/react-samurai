import {profileAPI} from '../Api/profileAPI';

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	posts: [
		{id: 1, postMessage: 'Hi I`m learning react', likesCount: 5},
		{id: 2, postMessage: 'Is it difficult?', likesCount: 1},
	],
	profile: null,
	newPostText: '',
	status: '',
	isFetching: false
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			console.log(state.posts)
			let newPost = {
				id: state.posts[state.posts.length] + 1,
				postMessage: state.newPostText,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};
		}
		case CHANGE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newPostText
			};
		}
		case SET_PROFILE_INFO: {
			return {
				...state,
				profile: action.profile
			};
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			};
		}
		default:
			return state;
	}
};

export const addPost = () => {
	return {type: ADD_POST};
};

export const changeNewPostText = (newPostText) => {
	return {
		type: CHANGE_NEW_POST_TEXT,
		newPostText: newPostText
	};
};

export const setProfileInfo = (profile) => {
	return {
		type: SET_PROFILE_INFO,
		profile
	};
};

export const toggleIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	};
};

export const setStatus = (status) => {
	return {
		type: SET_STATUS,
		status
	};
};

export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(setStatus(status));
			}
		})
};

export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId)
		.then(status => {
			dispatch(setStatus(status));
		})
};

export const getProfile = (userId) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	profileAPI.getProfile(userId)
		.then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setProfileInfo(data));
		})
		.catch(error => {
			dispatch(toggleIsFetching(false));
			console.log(error);
		})
};

export default profileReducer;