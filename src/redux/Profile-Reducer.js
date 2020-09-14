const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{id: 1, postMessage: 'Hi I`m learning react', likesCount: 5},
		{id: 2, postMessage: 'Is it difficult?', likesCount: 1},
	],
	newPostText: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			console.log(state.posts)
			let newPost = {
				id: state.posts[state.posts.length] + 1,
				postMessage: state.newPostText,
				likesCount: 0
			}
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
		default:
			return state;
	}
};

export const addPostActionCreator = () => {
	return {type: ADD_POST};
};

export const changeNewPostTextActionCreator = (newPostText) => {
	return {
		type: CHANGE_NEW_POST_TEXT,
		newPostText: newPostText
	};
};

export default profileReducer;