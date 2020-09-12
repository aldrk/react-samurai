const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';

const dialogReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: state.messages.length + 1,
				message: state.newMessageText
			};
			state.messages.push(newMessage);
			state.newMessageText = '';
			return state;
		case CHANGE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newMessageText;
			return state;
		default:
			return state;
	}
};

export const addMessageActionCreator = () => {
	return {type: ADD_MESSAGE};
};

export const changeNewMessageTextActionCreator = (newMessageText) => {
	return {
		type: CHANGE_NEW_MESSAGE_TEXT,
		newMessageText: newMessageText
	};
};

export default dialogReducer;