import {profileAPI} from '../Api/profileAPI';
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE_INFO = 'profile/SET-PROFILE-INFO';
const TOGGLE_IS_FETCHING = 'profile/TOGGLE-IS-FETCHING';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

let initialState = {
	posts: [
		{id: 1, postMessage: 'Hi I`m learning react', likesCount: 5},
		{id: 2, postMessage: 'Is it difficult?', likesCount: 1},
	],
	profile: null,
	status: '',
	isFetching: false
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: state.posts[state.posts.length] + 1,
				postMessage: action.newPostText,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
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
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: {...state.profile, photos: action.photos}
			}
		}
		default:
			return state;
	}
};

export const addPost = (newPostText) => {
	return {
		type: ADD_POST,
		newPostText
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

export const savePhotoSuccess = (photos) => {
	return {
		type: SAVE_PHOTO_SUCCESS,
		photos
	};
};

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status)
	if (response.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response));
};

export const getProfile = (userId) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	profileAPI.getProfile(userId)
		.then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setProfileInfo(data));
			return Promise.resolve();
		})
		.catch(error => {
			dispatch(toggleIsFetching(false));
		})
};

export const savePhoto = (photo) => async (dispatch) => {
	let response = await profileAPI.savePhoto(photo);
	if (response.resultCode === 0){
		dispatch(savePhotoSuccess(response.data.photos));
	}
};

export const setProfile = (profile) => (dispatch, getState) => {
	return profileAPI.setProfile(profile).then(response => {
		if (response.resultCode === 0) {
			console.log(1)
			dispatch(getProfile(getState().auth.id));
		}else {
			if (response.messages.length > 0) {
				let message = response.messages[0];
				dispatch(stopSubmit('edit-profile', {_error: message}))
				return Promise.reject(message);
			}
		}
	})
}

export default profileReducer;