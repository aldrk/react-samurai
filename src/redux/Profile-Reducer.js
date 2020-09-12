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
		case ADD_POST:
			let newPost = {
				id: state.posts.length + 1,
				postMessage: state.newPostText,
				likesCount: 0
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case CHANGE_NEW_POST_TEXT:
			state.newPostText = action.newPostText;
			return state;
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